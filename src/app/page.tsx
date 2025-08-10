import HeroBanner from "@/blocks/HeroBanner";
import About from "@/blocks/About";
import Skills from "@/blocks/Skills";
import Timeline from "@/blocks/Timeline";
import Realisations from "@/blocks/Realisations";
export default function Home() {
  return (
      <>
        <HeroBanner/>
          <About/>
          <Skills/>
          <Timeline/>
          <Realisations/>
      </>
  );
}
