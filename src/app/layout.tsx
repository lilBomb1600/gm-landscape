import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G&M Landscape Services | Pittsburg, CA",
  description:
    "G&M Landscape Services — 30 years of family-owned landscape construction in Pittsburg, CA. Paver patios, retaining walls, water features, outdoor lighting, and more. No middlemen, free estimates.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-ink text-cream">
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: A landscaping site rendered like liquid glass floating over the actual finished yards — real photography does the selling, glass chrome does the polish. Brief-pinned direction (heavy motion, liquid glass, "pop") from Arman, not a dice-rolled world.
OWN-WORLD: Deep night-garden ink ground; frosted specular-highlight glass cards/nav/pills; growth-green + warm gold accent; Bricolage Grotesque display, Inter body, JetBrains Mono data labels.
STORY: A homeowner sees G&M's real finished work through glass, believes a small two-person crew can deliver this level of craft, and calls for a free estimate.
FIRST VIEWPORT: Full-bleed real photo (checkerboard turf/paver patio with fountain) with parallax; a glass pill nav floats above; headline and CTA sit in a glass panel over the image.
FORM: Brief-pinned (user supplied explicit references: floating glass UI, glowing lines, Apple liquid glass) — no direction roll run for this build.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
-->`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
