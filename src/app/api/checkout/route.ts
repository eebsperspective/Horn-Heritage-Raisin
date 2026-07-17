import { NextResponse } from "next/server";
import { z } from "zod";
import { getStripeClient, isStripeConfigured } from "@/lib/stripe";
import { saveSubmission } from "@/lib/submissions";
import { sendNotificationEmail } from "@/lib/email";

const checkoutSchema = z.object({
  items: z
    .array(
      z.object({
        id: z.string(),
        slug: z.string(),
        name: z.string(),
        variantLabel: z.string(),
        unitPrice: z.number().positive(),
        quantity: z.number().int().positive(),
      }),
    )
    .min(1, "Cart is empty"),
  customer: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    country: z.string().min(1),
    addressLine1: z.string().min(1),
    city: z.string().min(1),
  }),
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const parsed = checkoutSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  const { items, customer } = parsed.data;

  const stripe = getStripeClient();

  if (!stripe || !isStripeConfigured()) {
    // Payments aren't wired up yet — capture the order for manual invoicing
    // instead of failing the checkout outright. See ROADMAP.md / README.md
    // for how to activate real Stripe Checkout (set STRIPE_SECRET_KEY).
    await saveSubmission("pending-order", { items, customer });
    await sendNotificationEmail({
      subject: `New order (payments not yet configured) — ${customer.name}`,
      text: `Customer: ${customer.name} <${customer.email}>\nCountry: ${customer.country}\n\nItems:\n${items
        .map((i) => `- ${i.name} (${i.variantLabel}) x${i.quantity} — $${i.unitPrice}`)
        .join("\n")}`,
      replyTo: customer.email,
    });

    return NextResponse.json({
      ok: true,
      fallback: true as const,
      message:
        "Payments aren't live yet — we've received your order details and will email you an invoice within 24 hours.",
    });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    customer_email: customer.email,
    line_items: items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(item.unitPrice * 100),
        product_data: { name: `${item.name} — ${item.variantLabel}` },
      },
    })),
    success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/checkout`,
    metadata: { customerName: customer.name, customerCountry: customer.country },
  });

  return NextResponse.json({ ok: true, fallback: false as const, url: session.url });
}
