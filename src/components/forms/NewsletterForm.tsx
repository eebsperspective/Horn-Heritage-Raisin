"use client";

import { useState } from "react";

export function NewsletterForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/forms/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          company: form.get("company"), // honeypot
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={className + " text-sm text-brown-600"}>
        You&apos;re on the list — thank you for subscribing.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <label htmlFor="newsletter-email" className="tracked mb-2 block text-xs font-medium uppercase text-brown-900">
        Get harvest updates &amp; new grade releases
      </label>
      <div className="flex gap-0">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="focus-ring w-full min-w-0 border border-brown-900 bg-sand-50 px-4 py-2.5 text-sm text-brown-900 placeholder:text-brown-600/60"
        />
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="tracked focus-ring shrink-0 border border-l-0 border-brown-900 bg-brown-900 px-5 py-2.5 text-xs font-medium uppercase text-sand-50 hover:bg-sand-50 hover:text-brown-900 disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm text-terracotta-500">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
