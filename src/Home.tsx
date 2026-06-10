import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Partners } from "@/components/site/Partners";
import { Strategy } from "@/components/site/Strategy";
import { Compliance } from "@/components/site/Compliance";
import { Contact, Footer } from "@/components/site/Contact";
import { CookieBanner } from "@/components/site/CookieBanner";

export default function Home() {
  return (
    <div className="min-h-dvh bg-background">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Partners />
        <Strategy />
        <Compliance />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
