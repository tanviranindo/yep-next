import ThemeShowcaseLayout from '@/components/Layout/ThemeShowcaseLayout'
import { defaultSelectionByCategory } from '@/lib/showcase'
import { layoutsByCategory } from '@/lib/layouts'

export const dynamic = 'force-dynamic'

export default function BeautyPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const defaults = defaultSelectionByCategory.beauty
  const layout = Number(Array.isArray(searchParams.layout) ? searchParams.layout[0] : searchParams.layout)
  const preset = layoutsByCategory.beauty.find((l) => l.id === layout)
  const navbar = preset?.navbar || Number(Array.isArray(searchParams.navbar) ? searchParams.navbar[0] : searchParams.navbar) || defaults.navbar
  const footer = preset?.footer || Number(Array.isArray(searchParams.footer) ? searchParams.footer[0] : searchParams.footer) || defaults.footer
  const card = preset?.productCard || Number(Array.isArray(searchParams.card) ? searchParams.card[0] : searchParams.card) || defaults.productCard

  const navbarClamped = ([1, 2, 3, 4, 5] as number[]).includes(navbar) ? (navbar as any) : defaults.navbar
  const footerClamped = ([1, 2, 3] as number[]).includes(footer) ? (footer as any) : defaults.footer
  const cardClamped = ([1, 2, 3] as number[]).includes(card) ? (card as any) : defaults.productCard

  return (
    <ThemeShowcaseLayout
      category="beauty"
      navbar={navbarClamped}
      footer={footerClamped}
      productCard={cardClamped}
      basePath="/beauty"
      searchParams={searchParams}
    />
  )
}
