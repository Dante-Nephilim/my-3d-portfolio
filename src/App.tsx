import { useRef } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Hero } from "./components/Hero";
import { MainNavBar } from "./components/MainNavbar";
import { ProjectsCarousel } from "./components/ProjectsCarousel";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 z-20 bg-white m-0 p-0">
        <MainNavBar
          heroRef={heroRef}
          projectsRef={projectsRef}
          certificationsRef={certificationsRef}
          experienceRef={experienceRef}
          contactRef={contactRef}
          skillsRef={skillsRef}
        />
      </div>
      <div className="mt-40 mx-auto max-w-screen-xl" ref={heroRef}>
        <Hero />
      </div>
      <div className="mt-40 mx-auto max-w-screen-xl" ref={projectsRef}>
        <ProjectsCarousel />
      </div>
      <div className="mt-40 mx-auto max-w-screen-xl" ref={certificationsRef}>
        <Certifications />
      </div>
      <div className="mt-40 mx-auto max-w-screen-xl" ref={experienceRef}>
        <Experience />
      </div>
      <div className="mt-40 mx-auto max-w-screen-xl" ref={skillsRef}>
        <Skills />
      </div>
      <div className="mt-40 mx-auto max-w-screen-xl" ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;
