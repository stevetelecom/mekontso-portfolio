import { Suspense } from "react";
import useLenis from "./hooks/useLenis";
import SceneExperience from "./components/canvas/Experience";
import Navbar from "./components/ui/Navbar";
import HUD from "./components/ui/HUD";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Formation from "./components/sections/Formation";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  const progressRef = useLenis();

  return (
    <>
      <Suspense fallback={null}>
        <SceneExperience progressRef={progressRef} />
      </Suspense>

      <Navbar />
      <HUD />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Formation />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
