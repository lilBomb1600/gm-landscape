/**
 * SEO kit config for G&M Landscape Services (the only kit file edited for this project).
 *
 * Every value is read from src/data/business.ts (their listing). Nothing is typed here as a new fact. Left out on
 * purpose: the Yelp rating (self-serving stars, LAUNCH-STANDARD.md B5), a street address (service-area business),
 * hours, prices, a license number and email (not in the data file).
 */
import { business, gallery, serviceCategories } from "@/data/business";
import type { BusinessFacts, Locale, OgImage, PageEntry, ServiceFact } from "./types";

/** The preview URL. On launch: NEXT_PUBLIC_SITE_URL=https://www.their-domain.com in Vercel instead of editing this. */
export const FALLBACK_URL = "https://gm-landscape.vercel.app";

/** One URL, English only. */
export const LOCALES: Locale[] = ["en"];
export const DEFAULT_LOCALE: Locale = "en";

/** public/og.jpg: their checkerboard turf and paver patio with the fountain (public/images/hero-checkerboard-fountain.jpg), cropped to 1.91:1. */
export const OG_IMAGE: OgImage = {
  url: "/og.jpg",
  width: 1000,
  height: 525,
  alt: gallery[0].alt,
};

/** "Serving Pittsburg, CA and the surrounding area" -> "Pittsburg", "CA" */
const [, city, region] = business.serviceArea.match(/Serving (.+?), ([A-Z]{2})\b/) ?? [];

/** The name already says the trade, so brand first (LAUNCH-STANDARD.md A). */
export const HOME_TITLE = `${business.name} | Landscaping in ${city}, ${region}`;
/** The site's first description, trimmed to 160 characters. Every claim is in business.ts. */
export const HOME_DESCRIPTION =
  `${business.name}: 30 years of family-owned landscape construction in ${city}, ${region}. ` +
  `Paver patios, retaining walls, water features. Free estimates.`;

export const facts: BusinessFacts = {
  name: business.name,
  type: "HomeAndConstructionBusiness",
  description: business.about,
  telephone: `+1${business.phone.replace(/\D/g, "")}`,
  // Service-area business: city + state only, no street.
  address: { locality: city, region },
  // Only the city they name. "the surrounding area" is not a list of cities.
  serviceArea: [`${city}, ${region}`],
  image: [OG_IMAGE.url, ...gallery.map((g) => g.src)],
  languages: business.highlights.includes("Se habla español") ? ["en", "es"] : ["en"],
};

/** The services on their listing, as the page names them. */
export const services: ServiceFact[] = serviceCategories.map((s) => ({ name: s.title }));

/** One page. */
export const pages: PageEntry[] = [{ path: "/" }];
