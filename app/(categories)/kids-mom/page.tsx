import ThemeShowcaseLayout from '@/components/Layout/ThemeShowcaseLayout'
import { defaultSelectionByCategory } from '@/lib/showcase'
import { layoutsByCategory } from '@/lib/layouts'

export const dynamic = 'force-dynamic'

export default async function KidsMomPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  // Map this route's category slug to the theme id used in DaisyUI
  const category = 'kidsmom' as const
  const defaults = defaultSelectionByCategory[category]
  const layout = Number(Array.isArray(resolvedSearchParams.layout) ? resolvedSearchParams.layout[0] : resolvedSearchParams.layout)
  const preset = layoutsByCategory[category].find((l) => l.id === layout)
  const navbar = preset?.navbar || Number(Array.isArray(resolvedSearchParams.navbar) ? resolvedSearchParams.navbar[0] : resolvedSearchParams.navbar) || defaults.navbar
  const footer = preset?.footer || Number(Array.isArray(resolvedSearchParams.footer) ? resolvedSearchParams.footer[0] : resolvedSearchParams.footer) || defaults.footer
  const card = preset?.productCard || Number(Array.isArray(resolvedSearchParams.card) ? resolvedSearchParams.card[0] : resolvedSearchParams.card) || defaults.productCard

  const navbarClamped = ([1, 2, 3, 4, 5] as number[]).includes(navbar) ? (navbar as any) : defaults.navbar
  const footerClamped = ([1, 2, 3] as number[]).includes(footer) ? (footer as any) : defaults.footer
  const cardClamped = ([1, 2, 3] as number[]).includes(card) ? (card as any) : defaults.productCard

  return (
    <ThemeShowcaseLayout
      category={category}
      navbar={navbarClamped}
      footer={footerClamped}
      productCard={cardClamped}
      basePath="/kids-mom"
      searchParams={resolvedSearchParams}
    />
  )
}
