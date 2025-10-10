import type { Metadata } from "next";
import { DM_Sans, Outfit, Playfair_Display, Afacad } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-dmsans",
});

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  title: "Yep Next",
  description: "A Next.js app with DaisyUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${outfit.variable} ${playfair.variable} ${dmSans.variable} ${afacad.variable}`}
    >
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
