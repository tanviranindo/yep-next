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
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-10 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 uppercase tracking-wide">
        FAQ
      </h2>
      <div
        className={`grid gap-4 ${
          columns === 2 ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {cols.map((col, i) => (
          <div key={i} className="space-y-2">
            {col.map((it, idx) => (
              <details
                key={idx}
                className="group border border-gray-200 bg-white"
              >
                <summary className="list-none cursor-pointer text-sm md:text-base font-semibold flex items-center gap-2 pr-4 py-4 px-4 text-gray-900 hover:bg-gray-50 transition-colors">
                  <span className="flex-1">{`${String(i * perCol + idx + 1).padStart(2, "0")}. ${
                    it.q
                  }`}</span>
                  <span className="text-gray-600 font-normal text-xl group-open:hidden flex-shrink-0">
                    +
                  </span>
                  <span className="text-gray-600 font-normal text-xl hidden group-open:inline flex-shrink-0">
                    −
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm md:text-base text-gray-600 leading-relaxed">{it.a}</div>
              </details>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
