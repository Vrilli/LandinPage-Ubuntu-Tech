import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import About from "./components/About";
import Leaders from "./components/Leaders";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Contact from "./components/Contacto";
import SpeakerCard from "./components/speakers";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Impact />
      <About />
      <Events />
      <SpeakerCard/>
      <Sponsors />
      <Leaders />
      <Contact />
      <Footer />
    </>
  );
}
