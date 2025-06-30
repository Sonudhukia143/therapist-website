import About from "./components/About";
import Consultations from "./components/Constultations";
import Details from "./components/Details";
import FAQ from "./components/Faq";
import Hero from "./components/Hero";
import Map from "./components/Map";
import QuoteSection from "./components/Quote";
import Testimonials from "./components/Testinomials";

export default function Home() {
  return (
    <>
    <Hero />
    <Consultations />
    <About />
    <Testimonials />
    <FAQ />
    <QuoteSection />
    <Map />
    <Details />
    </>
  );
}
