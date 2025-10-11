import FilterVariant1, { FilterSidebarV1Props } from "./variants/filter/variant-1";
import FilterVariant2, { FilterSidebarV2Props } from "./variants/filter/variant-2";

export type FashionFilterVariant = 1 | 2;

interface FashionFilterProps {
  variant: FashionFilterVariant;
  filterProps?: FilterSidebarV1Props | FilterSidebarV2Props;
}

/**
 * FashionFilter - Server component router for Fashion filter variants
 *
 * Routes to the appropriate filter variant based on the variant prop.
 * Both variants are client components due to interactive filtering state.
 */
export default function FashionFilter({ variant, filterProps }: FashionFilterProps) {
  if (variant === 2) {
    return <FilterVariant2 {...(filterProps || {})} />;
  }

  return <FilterVariant1 {...(filterProps || {})} />;
}
