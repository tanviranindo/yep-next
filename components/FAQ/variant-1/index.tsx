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
    <section className="w-full px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div
        className={`grid gap-4 ${
          columns === 2 ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {cols.map((col, i) => (
          <div key={i} className="space-y-2">
            {col.map((it, idx) => (
              <div
                key={idx}
                className="collapse collapse-arrow border border-base-300 bg-base-100"
              >
                <input type="checkbox" />
                <div className="collapse-title text-sm md:text-base font-medium">{`${String(
                  i * perCol + idx + 1
                ).padStart(2, "0")}. ${it.q}`}</div>
                <div className="collapse-content text-sm opacity-80">
                  {it.a}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
