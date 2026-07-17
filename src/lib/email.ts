import { contact } from "@/content/site";

type EmailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

/**
 * Sends a notification email via Resend when RESEND_API_KEY is set.
 * Without a key, this is a no-op (the submission is still durably saved by
 * lib/submissions.ts) — this keeps forms fully functional before an email
 * provider is wired up. Add RESEND_API_KEY in .env.local to activate.
 */
export async function sendNotificationEmail({ subject, text, replyTo }: EmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log(`[email:not-configured] ${subject}\n${text}`);
    return { sent: false as const };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL ?? "Horn Heritage <notifications@hornheritage.com>",
      to: contact.wholesaleEmail,
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[email:send-failed]", await res.text());
    return { sent: false as const };
  }
  return { sent: true as const };
}
