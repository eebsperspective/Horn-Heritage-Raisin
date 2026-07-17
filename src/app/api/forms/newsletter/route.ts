import { NextResponse } from "next/server";
import { newsletterSchema, isLikelyBot } from "@/lib/validation";
import { saveSubmission } from "@/lib/submissions";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (isLikelyBot(body)) {
    return NextResponse.json({ ok: true });
  }

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  await saveSubmission("newsletter", { email: parsed.data.email });

  return NextResponse.json({ ok: true });
}
