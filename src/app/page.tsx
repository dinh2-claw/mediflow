import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import ProductSplit from "@/components/ProductSplit";
import Audience from "@/components/Audience";
import ImpactStats from "@/components/ImpactStats";
import CTA from "@/components/CTA";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <ProductSplit />
        <Audience />
        <ImpactStats />
        <CTA />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
