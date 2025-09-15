import Image from 'next/image'
import Link from 'next/link'

export interface HeroV1Props {
  logoText?: string
  navLinks?: { label: string; href: string }[]
  rightIcons?: (string | JSX.Element)[]
  eyebrow?: string
  sublabel?: string
  title: string
  cta?: { label: string; href: string }
  thumbnails?: string[]
  heroImage: string
  ticker?: string[]
}

export default function FashionHeroVariant1({
  logoText = 'FASHION.',
  navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Shop', href: '#' },
    { label: 'Categories', href: '#' },
  ],
  rightIcons = ['❤', '🔔', '⚙'],
  eyebrow = 'Latest Collection of',
  sublabel,
  title,
  cta = { label: 'Explore →', href: '#' },
  thumbnails = ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
  heroImage,
  ticker = ['Fashion with a Flair', 'Strut with Confidence', 'Own Your Runway', 'Chic, Classy & Confident'],
}: HeroV1Props) {
  return (
    <section className="bg-base-100">
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <div className="flex items-center justify-between text-sm py-2">
          <div className="font-bold tracking-wider">{logoText}</div>
          <nav className="hidden md:flex items-center gap-6 opacity-80">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="link link-hover">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {rightIcons.map((ico, i) => (
              <span key={i} className="text-xs">
                {ico as any}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-base-200 p-8 flex flex-col justify-between">
            <div>
              {eyebrow && <p className="uppercase tracking-widest text-xs opacity-70">{eyebrow}</p>}
              {sublabel && <p className="text-xs opacity-70 mb-1">{sublabel}</p>}
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">{title}</h1>
              {cta && (
                <Link href={cta.href} className="btn btn-sm btn-outline mt-6">
                  {cta.label}
                </Link>
              )}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {thumbnails.slice(0, 3).map((src, i) => (
                <div key={src + i} className="relative h-16 bg-base-300">
                  <Image src={src} alt={`thumb-${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-base-100">
            <div className="relative w-full h-[420px]">
              <Image src={heroImage} alt="Hero" fill className="object-cover" />
            </div>
            <div className="absolute top-1/2 right-2 -translate-y-1/2 flex flex-col gap-2">
              {[0, 1, 2].map((i) => (
                <button key={i} className="btn btn-xs btn-circle">
                  •
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral text-neutral-content mt-6">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex items-center gap-6 py-2 text-sm">
            {ticker.map((t, i) => (
              <span key={`tick-${i}`} className="inline-flex items-center gap-2">
                <span>{t}</span>
                {i < ticker.length - 1 && <span aria-hidden>•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
