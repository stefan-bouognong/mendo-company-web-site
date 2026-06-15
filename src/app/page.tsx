import Hero          from "@/components/sections/Hero";
import Stats         from "@/components/sections/Stats";
import About         from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import Domains       from "@/components/sections/Domains";
import Solutions     from "@/components/sections/Solutions";
import Values        from "@/components/sections/Values";
import Founder       from "@/components/sections/Founder";
import Achievements  from "@/components/sections/Achievements";
import Subsidiary    from "@/components/sections/Subsidiary";
import Partners      from "@/components/sections/Partners";
import Contact       from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <VisionMission />
      <Domains />
      <Solutions />
      <Values />
      <Founder />
      <Achievements />
      <Subsidiary />
      <Partners />
      <Contact />
    </>
  );
}