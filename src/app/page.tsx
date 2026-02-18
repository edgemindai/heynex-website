import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Privacy from "@/components/Privacy";
import Tagline from "@/components/Tagline";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Privacy />
        <Tagline />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
