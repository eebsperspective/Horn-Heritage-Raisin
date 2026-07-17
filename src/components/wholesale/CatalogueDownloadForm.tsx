"use client";

import { useState } from "react";
import { Field, TextInput, HoneypotFields } from "@/components/forms/fields";

export function CatalogueDownloadForm() {
  const [startedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/forms/catalogue-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          businessName: form.get("businessName"),
          email: form.get("email"),
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
      <div className="border border-sand-300 bg-sand-100 p-5 text-brown-800" role="status">
        <p className="font-semibold text-brown-900">Request received.</p>
        <p className="mt-1 text-sm">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <HoneypotFields startedAt={startedAt} />
      <Field label="Name" htmlFor="cat-name" required>
        <TextInput id="cat-name" name="name" required autoComplete="name" />
      </Field>
      <Field label="Company" htmlFor="cat-company" required>
        <TextInput id="cat-company" name="businessName" required autoComplete="organization" />
      </Field>
      <Field label="Email" htmlFor="cat-email" required>
        <TextInput id="cat-email" name="email" type="email" required autoComplete="email" />
      </Field>
      {status === "error" && <p className="text-sm text-terracotta-500">{errorMessage}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="tracked focus-ring w-full border border-brown-900 bg-brown-900 px-6 py-3 text-xs font-semibold uppercase text-sand-50 hover:bg-sand-50 hover:text-brown-900 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Download wholesale catalogue"}
      </button>
    </form>
  );
}
