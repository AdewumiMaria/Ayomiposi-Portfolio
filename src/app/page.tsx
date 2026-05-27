import Experience from "./components/Experience";
import Featured from "./components/Featured";
import HeroSection from "./components/HeroSection";
import Narrative from "./components/Narrative";
import Navbar from "./components/Navbar";
import Stack from "./components/Stack";
import Mindset from "./components/Mindset";
import Media from "./components/Media";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section className="">
      {/* nav section */}
      <Navbar />
      <section className=" space-y-5">
        {/* Hero section */}
        <HeroSection />
        {/* Narrative section */}
        <Narrative />
      </section>
      {/* stack section */}
      <Stack />
      {/* experience section */}
      <Experience />
      {/* feature section */}
      <Featured />
      {/* Mindset section */}
      <Mindset/>
      {/* Media section */}
      <Media/>
      {/* Footer section */}
      <Footer/>
    </section>
  );
}
