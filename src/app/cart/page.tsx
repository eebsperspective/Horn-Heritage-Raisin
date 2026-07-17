"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <Container className="py-12">
      <h1 className="font-display text-3xl text-brown-900">Your Cart</h1>

      {items.length === 0 ? (
        <div className="mt-8 border border-sand-300 bg-sand-50 p-10 text-center">
          <p className="text-brown-700">Your cart is empty.</p>
          <Button href="/shop" className="mt-5">
            Shop Resin
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ul className="divide-y divide-sand-300 border border-sand-300 bg-white">
              {items.map((item) => (
                <li key={item.id} className="flex flex-wrap items-center gap-4 p-5">
                  <div className="flex-1">
                    <Link href={`/shop/${item.slug}`} className="font-medium text-brown-900 hover:underline">
                      {item.name}
                    </Link>
                    <p className="text-sm text-brown-600">{item.variantLabel}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <label htmlFor={`qty-${item.id}`} className="sr-only">
                      Quantity for {item.name}
                    </label>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="focus-ring w-16 border border-sand-300 px-2 py-1.5 text-center text-sm"
                    />
                  </div>
                  <div className="w-20 text-right font-medium text-brown-900">
                    ${(item.unitPrice * item.quantity).toFixed(2)}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="focus-ring text-sm text-terracotta-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-fit border border-sand-300 bg-sand-50 p-6">
            <div className="flex items-center justify-between text-lg font-semibold text-brown-900">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-brown-500">Shipping &amp; taxes calculated at checkout.</p>
            <Button href="/checkout" className="mt-5 w-full">
              Proceed to checkout
            </Button>
            <p className="mt-4 text-sm text-brown-600">
              Need bulk quantities?{" "}
              <Link href="/wholesale" className="font-medium text-terracotta-500 hover:underline">
                Visit Wholesale &amp; Export
              </Link>
            </p>
          </div>
        </div>
      )}
    </Container>
  );
}
