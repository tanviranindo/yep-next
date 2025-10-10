"use client";

import FilterSidebarVariant1, { FilterSidebarV1Props } from "@/components/Filters/Sidebar/variant-1";
import Fashion2Filter from "@/components/Filters/Sidebar/Fashion2Filter";

export type FashionFilterVariant = 1 | 2;

interface FashionFilterProps {
  variant: FashionFilterVariant;
  filterProps?: FilterSidebarV1Props;
}

export default function FashionFilter({ variant, filterProps }: FashionFilterProps) {
  if (variant === 2) {
    return <Fashion2Filter />;
  }

  return <FilterSidebarVariant1 {...(filterProps || {})} />;
}
