"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/content/products";

export function VariantPicker({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [variantIndex, setVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const variant = product.variants[variantIndex];

  function handleAdd() {
    addItem(
      {
        id: `${product.slug}-${variant.weightGrams}`,
        slug: product.slug,
        name: product.name,
        variantLabel: variant.label,
        weightGrams: variant.weightGrams,
        unitPrice: variant.price,
      },
      quantity,
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="tracked mb-2 text-xs font-medium uppercase text-brown-900">Weight</p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((v, index) => (
            <button
              key={v.label}
              type="button"
              onClick={() => setVariantIndex(index)}
              className={`focus-ring border px-4 py-2 text-sm font-medium transition-colors ${
                index === variantIndex
                  ? "border-brown-900 bg-brown-900 text-white"
                  : "border-sand-300 bg-white text-brown-800 hover:border-brown-900"
              }`}
            >
              {v.label} — ${v.price}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label htmlFor="quantity" className="tracked text-xs font-medium uppercase text-brown-900">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="focus-ring w-20 border border-sand-300 px-3 py-2 text-center"
        />
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="tracked focus-ring w-full border border-brown-900 bg-brown-900 px-6 py-3 text-xs font-semibold uppercase text-white transition-colors hover:bg-sand-50 hover:text-brown-900 sm:w-auto"
      >
        {added ? "Added to cart ✓" : `Add to cart — $${(variant.price * quantity).toFixed(2)}`}
      </button>
    </div>
  );
}
