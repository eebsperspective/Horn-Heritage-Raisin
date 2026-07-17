import { NextResponse } from "next/server";
import { wholesaleInquirySchema, isLikelyBot } from "@/lib/validation";
import { saveSubmission } from "@/lib/submissions";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (isLikelyBot(body)) {
    return NextResponse.json({
      ok: true,
      message: "Thanks — we reply within 24–48 hours.",
    });
  }

  const parsed = wholesaleInquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  const data = parsed.data;
  await saveSubmission("wholesale-inquiry", data);
  await sendNotificationEmail({
    subject: `Wholesale inquiry: ${data.businessName} (${data.businessType})`,
    text: [
      `Name: ${data.name}`,
      `Company: ${data.businessName}`,
      `Email: ${data.email}`,
      `Phone/WhatsApp: ${data.phone}`,
      `Country: ${data.country}`,
      `Business type: ${data.businessType}`,
      `Products of interest: ${data.productsOfInterest.join(", ")}`,
      `Estimated order volume: ${data.orderVolume}`,
      `Send catalogue: ${data.sendCatalogue ? "Yes" : "No"}`,
      "",
      data.message ?? "",
    ].join("\n"),
    replyTo: data.email,
  });

  return NextResponse.json({
    ok: true,
    message: "Thanks for reaching out — we reply within 24–48 hours. Prefer to talk sooner? Message us on WhatsApp.",
  });
}
