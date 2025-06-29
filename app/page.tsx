import About from "./components/About";
import Consultations from "./components/Constultations";
import FAQ from "./components/Faq";
import Hero from "./components/Hero";
import Testimonials from "./components/Testinomials";

export default function Home() {
  return (
    <>
    <Hero />
    <Consultations />
    <About />
    <Testimonials />
    <FAQ />
    </>
  );
}
