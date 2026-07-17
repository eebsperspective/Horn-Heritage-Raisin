"use client";

import { useState } from "react";
import { Field, TextInput, TextArea, HoneypotFields } from "@/components/forms/fields";

export function ContactForm() {
  const [startedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/forms/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          message: form.get("message"),
          company: form.get("company"),
          startedAt: Number(form.get("startedAt")),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Something went wrong");
      setSuccessMessage(data.message);
      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-sand-300 bg-sand-50 p-6 text-brown-800">
        <p className="font-semibold text-brown-900">Message sent.</p>
        <p className="mt-1">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <HoneypotFields startedAt={startedAt} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="contact-name" required>
          <TextInput id="contact-name" name="name" required autoComplete="name" />
        </Field>
        <Field label="Email" htmlFor="contact-email" required>
          <TextInput id="contact-email" name="email" type="email" required autoComplete="email" />
        </Field>
      </div>
      <Field label="Phone / WhatsApp" htmlFor="contact-phone">
        <TextInput id="contact-phone" name="phone" autoComplete="tel" />
      </Field>
      <Field label="Message" htmlFor="contact-message" required>
        <TextArea id="contact-message" name="message" required rows={5} />
      </Field>
      {status === "error" && <p className="text-sm text-terracotta-600">{errorMessage}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="tracked focus-ring w-full border border-brown-900 bg-brown-900 px-6 py-3 text-xs font-semibold uppercase text-white hover:bg-sand-50 hover:text-brown-900 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
