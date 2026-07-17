"use client";

import { useState } from "react";
import { Field, TextInput, TextArea, HoneypotFields, CheckboxGroup } from "@/components/forms/fields";
import { wholesaleProductInterests } from "@/content/site";

export function SampleRequestForm() {
  const [startedAt] = useState(() => Date.now());
  const [products, setProducts] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/forms/sample-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          businessName: form.get("businessName"),
          email: form.get("email"),
          phone: form.get("phone"),
          country: form.get("country"),
          productsOfInterest: products,
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
      <div className="border border-sand-300 bg-white p-6 text-brown-800" role="status">
        <p className="font-semibold text-brown-900">Sample request received.</p>
        <p className="mt-1">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <HoneypotFields startedAt={startedAt} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" htmlFor="sr-name" required>
          <TextInput id="sr-name" name="name" required autoComplete="name" />
        </Field>
        <Field label="Company" htmlFor="sr-company">
          <TextInput id="sr-company" name="businessName" autoComplete="organization" />
        </Field>
        <Field label="Email" htmlFor="sr-email" required>
          <TextInput id="sr-email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field label="Country" htmlFor="sr-country" required>
          <TextInput id="sr-country" name="country" required autoComplete="country-name" />
        </Field>
      </div>
      <Field label="Which resins are you curious about?" htmlFor="sr-products">
        <CheckboxGroup
          name="productsOfInterest"
          options={wholesaleProductInterests}
          selected={products}
          onChange={setProducts}
        />
      </Field>
      <Field label="Anything else we should know?" htmlFor="sr-message">
        <TextArea id="sr-message" name="message" rows={3} />
      </Field>
      {status === "error" && <p className="text-sm text-terracotta-500">{errorMessage}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="tracked focus-ring w-full border border-brown-900 bg-brown-900 px-6 py-3 text-xs font-semibold uppercase text-sand-50 hover:bg-sand-50 hover:text-brown-900 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Request a sample kit"}
      </button>
    </form>
  );
}
