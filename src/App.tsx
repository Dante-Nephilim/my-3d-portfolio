import './App.css';
import { Hero } from './components/Hero';
import { MainNavBar } from './components/MainNavbar';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 z-20 bg-white m-0 p-0">
        <MainNavBar />
      </div>

      <div className="fixed top-16 left-0 h-screen w-1/12 z-10 bg-white opacity-0 group hover:opacity-100 transition-all duration-500 ease-in-out m-0 p-0">
        <Navbar />
      </div>

      <div className="mt-16">
        <Hero />
      </div>
    </>
  );
}

export default App;
