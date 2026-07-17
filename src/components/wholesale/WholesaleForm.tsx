"use client";

import { useState } from "react";
import {
  Field,
  TextInput,
  TextArea,
  Select,
  HoneypotFields,
  CheckboxGroup,
} from "@/components/forms/fields";
import {
  businessTypeOptions,
  orderVolumeRanges,
  wholesaleProductInterests,
  contact,
} from "@/content/site";

export function WholesaleForm({ defaultProductInterest }: { defaultProductInterest?: string }) {
  const [startedAt] = useState(() => Date.now());
  const [products, setProducts] = useState<string[]>(
    defaultProductInterest ? [defaultProductInterest] : [],
  );
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/forms/wholesale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          businessName: form.get("businessName"),
          email: form.get("email"),
          phone: form.get("phone"),
          country: form.get("country"),
          businessType: form.get("businessType"),
          productsOfInterest: products,
          orderVolume: form.get("orderVolume"),
          message: form.get("message"),
          sendCatalogue: form.get("sendCatalogue") === "on",
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
      <div className="border border-sand-300 bg-sand-50 p-6 text-brown-800" role="status">
        <p className="font-semibold text-brown-900">Inquiry received.</p>
        <p className="mt-1">{successMessage}</p>
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-terracotta-500 hover:underline"
        >
          Or message us on WhatsApp →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <HoneypotFields startedAt={startedAt} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="ws-name" required>
          <TextInput id="ws-name" name="name" required autoComplete="name" />
        </Field>
        <Field label="Company" htmlFor="ws-company" required>
          <TextInput id="ws-company" name="businessName" required autoComplete="organization" />
        </Field>
        <Field label="Email" htmlFor="ws-email" required>
          <TextInput id="ws-email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="ws-phone" required>
          <TextInput id="ws-phone" name="phone" required autoComplete="tel" />
        </Field>
        <Field label="Country" htmlFor="ws-country" required>
          <TextInput id="ws-country" name="country" required autoComplete="country-name" />
        </Field>
        <Field label="Business type" htmlFor="ws-business-type" required>
          <Select id="ws-business-type" name="businessType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {businessTypeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Products of interest" htmlFor="ws-products" required>
        <CheckboxGroup
          name="productsOfInterest"
          options={wholesaleProductInterests}
          selected={products}
          onChange={setProducts}
        />
      </Field>

      <Field label="Estimated order volume" htmlFor="ws-volume" required>
        <Select id="ws-volume" name="orderVolume" required defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {orderVolumeRanges.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Message" htmlFor="ws-message" hint="Tell us about your business and what you're looking for.">
        <TextArea id="ws-message" name="message" rows={4} />
      </Field>

      <label className="flex items-center gap-2 text-sm text-brown-800">
        <input
          type="checkbox"
          name="sendCatalogue"
          className="focus-ring h-4 w-4 border-sand-400 text-brown-900"
        />
        Send me the wholesale catalogue
      </label>

      {status === "error" && <p className="text-sm text-terracotta-500">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="tracked focus-ring w-full border border-brown-900 bg-brown-900 px-6 py-3 text-xs font-semibold uppercase text-white hover:bg-sand-50 hover:text-brown-900 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting…" : "Submit wholesale inquiry"}
      </button>
      <p className="tracked text-xs uppercase text-brown-500">We reply within 24–48 hours.</p>
    </form>
  );
}
