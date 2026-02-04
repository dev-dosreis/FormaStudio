import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Differentials from "@/components/sections/Differentials";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Portfolio />
        <Process />
        <Differentials />
        <Testimonials />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
