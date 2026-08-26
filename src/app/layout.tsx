import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "G&M Landscape Services | Pittsburg, CA",
  description:
    "G&M Landscape Services: 30 years of family-owned landscape construction in Pittsburg, CA. Paver patios, retaining walls, water features, outdoor lighting, and more. No middlemen, free estimates.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${bricolage.variable} ${hanken.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: A landscaping site rendered like liquid glass floating over the actual finished yards - real photography does the selling, glass chrome does the polish. Brief-pinned direction (heavy motion, liquid glass, "pop") from Arman, not a dice-rolled world.
OWN-WORLD: Deep night-garden ink ground; frosted specular-highlight glass cards/nav/pills; growth-green + warm gold accent; Bricolage Grotesque display, Hanken Grotesk body, JetBrains Mono data labels.
STORY: A homeowner sees G&M's real finished work through glass, believes a small two-person crew can deliver this level of craft, and calls for a free estimate.
FIRST VIEWPORT: Full-bleed real photo (checkerboard turf/paver patio with fountain) with parallax; a glass pill nav floats above; headline and CTA sit in a glass panel over the image.
FORM: Brief-pinned (user supplied explicit references: floating glass UI, glowing lines, Apple liquid glass) - no direction roll run for this build. Polish pass applied via design-taste-frontend skill (redesign-preserve mode): cursor glow, 3D card tilt, next/font migration, reduced-motion gating.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
-->`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
