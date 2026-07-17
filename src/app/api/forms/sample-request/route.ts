import { NextResponse } from "next/server";
import { sampleRequestSchema, isLikelyBot } from "@/lib/validation";
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

  const parsed = sampleRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  const data = parsed.data;
  await saveSubmission("sample-request", data);
  await sendNotificationEmail({
    subject: `Sample kit request from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Company: ${data.businessName ?? "-"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone ?? "-"}`,
      `Country: ${data.country}`,
      `Products of interest: ${(data.productsOfInterest ?? []).join(", ") || "-"}`,
      "",
      data.message ?? "",
    ].join("\n"),
    replyTo: data.email,
  });

  return NextResponse.json({
    ok: true,
    message: "Sample request received — we reply within 24–48 hours with next steps.",
  });
}
