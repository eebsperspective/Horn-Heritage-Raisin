"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";
import { Container } from "@/components/shared/Container";
import { Field, TextInput } from "@/components/forms/fields";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "fallback">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fallbackMessage, setFallbackMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          customer: {
            name: form.get("name"),
            email: form.get("email"),
            country: form.get("country"),
            addressLine1: form.get("addressLine1"),
            city: form.get("city"),
          },
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Something went wrong");

      if (data.fallback) {
        setFallbackMessage(data.message);
        setStatus("fallback");
        clear();
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (items.length === 0 && status !== "fallback") {
    return (
      <Container className="py-12">
        <h1 className="font-display text-3xl text-brown-900">Checkout</h1>
        <p className="mt-4 text-brown-700">
          Your cart is empty.{" "}
          <button onClick={() => router.push("/shop")} className="font-medium text-terracotta-500 hover:underline">
            Go shop resin →
          </button>
        </p>
      </Container>
    );
  }

  if (status === "fallback") {
    return (
      <Container className="py-16">
        <div className="mx-auto max-w-lg border border-sand-300 bg-sand-50 p-8 text-center">
          <p className="font-display text-2xl text-brown-900">Order received</p>
          <p className="mt-3 text-brown-700">{fallbackMessage}</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-12">
      <h1 className="font-display text-3xl text-brown-900">Checkout</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="space-y-5 lg:col-span-2">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" htmlFor="co-name" required>
              <TextInput id="co-name" name="name" required autoComplete="name" />
            </Field>
            <Field label="Email" htmlFor="co-email" required>
              <TextInput id="co-email" name="email" type="email" required autoComplete="email" />
            </Field>
            <Field label="Country" htmlFor="co-country" required>
              <TextInput id="co-country" name="country" required autoComplete="country-name" />
            </Field>
            <Field label="City" htmlFor="co-city" required>
              <TextInput id="co-city" name="city" required autoComplete="address-level2" />
            </Field>
          </div>
          <Field label="Address" htmlFor="co-address" required>
            <TextInput id="co-address" name="addressLine1" required autoComplete="address-line1" />
          </Field>
          {status === "error" && <p className="text-sm text-terracotta-500">{errorMessage}</p>}
          <button
            type="submit"
            disabled={status === "loading"}
            className="tracked focus-ring w-full border border-brown-900 bg-brown-900 px-6 py-3 text-xs font-semibold uppercase text-white hover:bg-sand-50 hover:text-brown-900 disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" ? "Processing…" : "Place order"}
          </button>
        </form>

        <div className="h-fit border border-sand-300 bg-sand-50 p-6">
          <p className="font-semibold text-brown-900">Order summary</p>
          <ul className="mt-4 space-y-2 text-sm text-brown-700">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between gap-2">
                <span>
                  {item.name} ({item.variantLabel}) × {item.quantity}
                </span>
                <span>${(item.unitPrice * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-sand-300 pt-4 font-semibold text-brown-900">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
