import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import About from "./components/About";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}