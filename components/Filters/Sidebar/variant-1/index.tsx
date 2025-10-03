export interface FilterGroup {
  title: string;
  name: string;
  options: string[];
  type?: "checkbox" | "buttons";
  selected?: string[];
}

export interface FilterSidebarV1Props {
  action?: string;
  price?: {
    name?: string;
    min: number;
    max: number;
    value?: number;
    label?: string;
  };
  groups?: FilterGroup[];
  applyLabel?: string;
}

export default function FilterSidebarVariant1({
  action,
  price = {
    min: 5500,
    max: 10500,
    value: 8000,
    name: "price",
    label: "Filter by Price",
  },
  groups = [
    {
      title: "Categories",
      name: "category",
      options: ["All", "Men", "Women", "Accessories"],
      type: "checkbox",
    },
    {
      title: "Collections",
      name: "collection",
      options: [
        "Men's Top Wear",
        "Men's Jeans",
        "Women's Top Wear",
        "Women's Jeans",
        "Sunglass",
        "Watch",
        "Belt",
      ],
      type: "checkbox",
    },
    {
      title: "Size",
      name: "size",
      options: ["S", "M", "L", "XL", "XXL", "XXXL"],
      type: "buttons",
    },
    {
      title: "Product Brands",
      name: "brand",
      options: [
        "All",
        "Verchache",
        "Premium Style",
        "Velvet",
        "Haus Of Core",
        "Guochi",
      ],
      type: "checkbox",
    },
    {
      title: "Availability",
      name: "availability",
      options: ["In stock (164)", "Out of stock (28)"],
      type: "checkbox",
    },
  ],
  applyLabel = "FILTER",
}: FilterSidebarV1Props) {
  return (
    <aside className="w-full md:w-64 bg-base-100 border border-base-200 p-4 text-sm">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold">51 Results</span>
        <button type="button" className="btn btn-xs btn-outline">
          CLEAR FILTERS
        </button>
      </div>

      <form method="get" action={action} className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="uppercase tracking-widest text-xs opacity-70">
              {price.label ?? "Filter by Price"}
            </span>
            <span className="text-xs opacity-60">
              BDT {price.min.toLocaleString()} — BDT{" "}
              {price.max.toLocaleString()}+
            </span>
          </div>
          <input
            name={price.name ?? "price"}
            type="range"
            min={price.min}
            max={price.max}
            defaultValue={price.value ?? price.min}
            className="range range-xs"
          />
          <div className="mt-2 flex items-center justify-between">
            <div className="text-xs opacity-60">
              BDT {(price.value ?? price.min).toLocaleString()}
            </div>
            <button className="btn btn-xs btn-outline" type="submit">
              {applyLabel}
            </button>
          </div>
        </div>

        {groups.map((g, idx) => (
          <div key={g.title}>
            {idx > 0 && <div className="divider my-4"></div>}
            <h3 className="font-semibold mb-2">{g.title}</h3>
            {g.type === "buttons" ? (
              <div className="flex flex-wrap gap-2">
                {g.options.map((o) => (
                  <button
                    key={o}
                    className="btn btn-xs btn-ghost border border-base-300 rounded-none w-9 h-8"
                    name={g.name}
                    value={o}
                    type="submit"
                  >
                    {o}
                  </button>
                ))}
              </div>
            ) : (
              <ul className="space-y-1">
                {g.options.map((o) => (
                  <li key={o} className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs"
                        name={g.name}
                        value={o}
                        defaultChecked={g.selected?.includes(o)}
                      />
                      <span className="label-text">{o}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </form>
    </aside>
  );
}
