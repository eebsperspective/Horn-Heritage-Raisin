import { mkdir, appendFile } from "fs/promises";
import path from "path";

const SUBMISSIONS_DIR = path.join(process.cwd(), "data", "submissions");

/**
 * Durable local fallback for form submissions: appends one JSON line per
 * submission to data/submissions/<form>.jsonl. This always runs, even when
 * RESEND_API_KEY is configured and email sending succeeds, so nothing is
 * ever lost to a flaky email provider.
 */
export async function saveSubmission(form: string, payload: Record<string, unknown>) {
  await mkdir(SUBMISSIONS_DIR, { recursive: true });
  const record = { ...payload, form, receivedAt: new Date().toISOString() };
  await appendFile(
    path.join(SUBMISSIONS_DIR, `${form}.jsonl`),
    JSON.stringify(record) + "\n",
    "utf8",
  );
}
