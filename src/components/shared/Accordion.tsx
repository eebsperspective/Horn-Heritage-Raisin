"use client";

import { useState } from "react";
import clsx from "clsx";

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-sand-300 border border-sand-300 bg-sand-50">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `accordion-panel-${index}`;
        const buttonId = `accordion-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-brown-900"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className={clsx(
                    "shrink-0 text-xl text-terracotta-600 transition-transform",
                    open && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-5 pb-4 text-brown-700"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
