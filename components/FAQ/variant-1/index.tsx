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
    <section className="w-full px-4 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
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
                className="group border border-gray-200 bg-white"
              >
                <summary className="list-none cursor-pointer text-sm md:text-base font-medium flex items-center gap-2 pr-3 py-3 px-3 text-gray-900 hover:text-gray-700">
                  <span>{`${String(i * perCol + idx + 1).padStart(2, "0")}. ${
                    it.q
                  }`}</span>
                  <span className="ml-auto text-gray-600 font-normal text-2xl group-open:hidden">
                    +
                  </span>
                  <span className="ml-auto text-gray-600 font-normal text-2xl hidden group-open:inline">
                    −
                  </span>
                </summary>
                <div className="px-3 pb-4 text-sm text-gray-700">{it.a}</div>
              </details>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
