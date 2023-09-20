import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Hero } from './components/Hero';
import { MainNavBar } from './components/MainNavbar';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 z-20 bg-white m-0 p-0">
        <MainNavBar />
      </div>
      <div className="mt-40 mx-auto max-w-screen-xl">
        <Hero />
      </div>
      <div className="mt-40 mx-auto max-w-screen-xl">
        <ProjectsCarousel/>
      </div>
      <div className="mt-40 mx-auto max-w-screen-xl">
        <Certifications/>
      </div>
      <div className="mt-40 mx-auto max-w-screen-xl">
        <Skills/>
      </div>
    </>
  );
}

export default App;
