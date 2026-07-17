import { NextResponse } from "next/server";
import { contactSchema, isLikelyBot } from "@/lib/validation";
import { saveSubmission } from "@/lib/submissions";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (isLikelyBot(body)) {
    return NextResponse.json({ ok: true, message: "Thanks — we'll be in touch soon." });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  const { name, email, phone, message } = parsed.data;
  await saveSubmission("contact", { name, email, phone, message });
  await sendNotificationEmail({
    subject: `New contact form message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? "-"}\n\n${message}`,
    replyTo: email,
  });

  return NextResponse.json({
    ok: true,
    message: "Thanks for reaching out — we reply within 24–48 hours.",
  });
}
