import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/lib/seo/config";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" });

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
