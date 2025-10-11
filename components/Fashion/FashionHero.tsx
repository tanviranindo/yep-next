import HeroVariant1, { HeroV1Props } from "./variants/hero/variant-1";
import HeroVariant2, { HeroV2Props } from "./variants/hero/variant-2";

export type FashionHeroVariant = 1 | 2;

type FashionHeroProps =
  | ({ variant: 1 } & HeroV1Props)
  | ({ variant: 2 } & HeroV2Props);

/**
 * FashionHero - Server component router for Fashion hero variants
 *
 * This component routes to the appropriate hero variant based on the variant prop.
 * Adding a new variant only requires:
 * 1. Create new folder: variants/hero/variant-N/
 * 2. Add implementation with default export
 * 3. Update this router (or use auto-discovery in the future)
 */
export default function FashionHero(props: FashionHeroProps) {
  if (props.variant === 2) {
    return <HeroVariant2 {...props} />;
  }
  return <HeroVariant1 {...props} />;
}
