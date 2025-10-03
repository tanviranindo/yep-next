export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQVariant1({
  items,
  columns = 2,
}: {
  items: FAQItem[];
  columns?: 1 | 2;
}) {
  const perCol = Math.ceil(items.length / columns);
  const cols: FAQItem[][] = Array.from({ length: columns }).map((_, i) =>
    items.slice(i * perCol, (i + 1) * perCol)
  );
  return (
    <section className="w-full px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div
        className={`grid gap-3 ${
          columns === 2 ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {cols.map((col, i) => (
          <div key={i} className="space-y-2">
            {col.map((it, idx) => (
              <details
                key={idx}
                className="group border border-base-300 bg-base-100"
              >
                <summary className="list-none cursor-pointer text-sm md:text-base font-medium flex items-center gap-2 pr-3 py-3 px-3">
                  <span>{`${String(i * perCol + idx + 1).padStart(2, "0")}. ${
                    it.q
                  }`}</span>
                  <svg
                    viewBox="0 0 20 12"
                    className="ml-auto h-3 w-3 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 2L10 10L18 2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <div className="px-3 pb-4 text-sm opacity-80">{it.a}</div>
              </details>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
