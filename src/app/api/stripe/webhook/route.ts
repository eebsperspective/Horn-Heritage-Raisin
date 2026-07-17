import { NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { saveSubmission } from "@/lib/submissions";

/**
 * Order fulfillment stub. Once STRIPE_SECRET_KEY + STRIPE_WEBHOOK_SECRET are
 * set and this endpoint is registered in the Stripe dashboard, this records
 * completed checkout sessions. Currently a no-op scaffold — no charges can
 * reach here until Stripe is fully configured (see README.md).
 */
export async function POST(request: Request) {
  const stripe = getStripeClient();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !webhookSecret) {
    return NextResponse.json({ ok: false, error: "Stripe not configured" }, { status: 501 });
  }

  const signature = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature ?? "", webhookSecret);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    await saveSubmission("completed-order", { event: event.data.object });
  }

  return NextResponse.json({ ok: true });
}
