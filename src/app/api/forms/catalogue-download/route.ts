import { NextResponse } from "next/server";
import { catalogueDownloadSchema, isLikelyBot } from "@/lib/validation";
import { saveSubmission } from "@/lib/submissions";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (isLikelyBot(body)) {
    return NextResponse.json({ ok: true, message: "Check your inbox shortly." });
  }

  const parsed = catalogueDownloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  const data = parsed.data;
  await saveSubmission("catalogue-download", data);
  await sendNotificationEmail({
    subject: `Wholesale catalogue requested by ${data.name} (${data.businessName})`,
    text: `Name: ${data.name}\nCompany: ${data.businessName}\nEmail: ${data.email}`,
    replyTo: data.email,
  });

  // NOTE: the catalogue PDF itself is a future-phase asset (see ROADMAP.md).
  // The gate/email-capture mechanism is fully wired; once a PDF exists,
  // attach/link it here and in the confirmation email.
  return NextResponse.json({
    ok: true,
    message: "Thanks! Our wholesale catalogue is on its way to your inbox — please allow up to 24 hours.",
  });
}
