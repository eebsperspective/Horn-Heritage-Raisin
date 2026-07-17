import { wholesaleFacts } from "@/content/site";

export function QuickAnswersGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnswerCard title="Minimum order quantity">
        <ul className="space-y-1.5 text-sm text-brown-700">
          {wholesaleFacts.moq.map((item) => (
            <li key={item.category} className="flex justify-between gap-4">
              <span>{item.category}</span>
              <span className="font-medium text-brown-900">{item.moq}</span>
            </li>
          ))}
        </ul>
      </AnswerCard>

      <AnswerCard title="Shipping">
        <p className="text-sm text-brown-700">We ship worldwide. Primary markets:</p>
        <ul className="tracked mt-2 flex flex-wrap gap-1.5 text-[11px] uppercase">
          {wholesaleFacts.shippingRegions.primary.map((r) => (
            <li key={r} className="border border-sand-300 bg-sand-100 px-2.5 py-1 text-brown-800">
              {r}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-brown-500">{wholesaleFacts.shippingRegions.note}</p>
      </AnswerCard>

      <AnswerCard title="Lead times">
        <ul className="space-y-1.5 text-sm text-brown-700">
          {wholesaleFacts.leadTimes.map((item) => (
            <li key={item.stage} className="flex justify-between gap-4">
              <span>{item.stage}</span>
              <span className="font-medium text-brown-900">{item.time}</span>
            </li>
          ))}
        </ul>
      </AnswerCard>

      <AnswerCard title="Packaging">
        <ul className="list-inside list-disc space-y-1.5 text-sm text-brown-700">
          {wholesaleFacts.packaging.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </AnswerCard>

      <AnswerCard title="Certifications & documentation">
        <ul className="space-y-1.5 text-sm text-brown-700">
          {wholesaleFacts.documentation.map((doc) => (
            <li key={doc.name} className="flex items-center justify-between gap-4">
              <span>{doc.name}</span>
              <span
                className={
                  doc.status === "available"
                    ? "tracked border border-terracotta-500/40 px-2 py-0.5 text-[10px] font-semibold uppercase text-terracotta-500"
                    : "tracked border border-sand-300 px-2 py-0.5 text-[10px] font-semibold uppercase text-brown-600"
                }
              >
                {doc.status === "available" ? "Available" : "Coming soon"}
              </span>
            </li>
          ))}
        </ul>
      </AnswerCard>

      <AnswerCard title="Payment & terms">
        <p className="text-sm text-brown-700">{wholesaleFacts.paymentTerms}</p>
        <p className="mt-2 text-sm text-brown-700">
          <span className="font-medium text-brown-900">Incoterms: </span>
          {wholesaleFacts.incoterms}
        </p>
      </AnswerCard>
    </div>
  );
}

function AnswerCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-sand-300 bg-white p-6">
      <h3 className="font-display text-lg text-brown-900">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}
