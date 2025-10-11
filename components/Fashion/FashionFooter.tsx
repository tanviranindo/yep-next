import FooterVariant1 from "./variants/footer/variant-1";
import FooterVariant2 from "./variants/footer/variant-2";

export type FashionFooterVariant = 1 | 2;

interface FashionFooterProps {
  variant: FashionFooterVariant;
}

/**
 * FashionFooter - Server component router for Fashion footer variants
 *
 * Both variants are server components (no state needed).
 */
export default function FashionFooter({ variant }: FashionFooterProps) {
  if (variant === 2) {
    return <FooterVariant2 />;
  }

  return <FooterVariant1 />;
}
