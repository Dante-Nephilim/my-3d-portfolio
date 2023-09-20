import './App.css';
import { Hero } from './components/Hero';
import { MainNavBar } from './components/MainNavbar';

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 z-20 bg-white m-0 p-0">
        <MainNavBar />
      </div>
      <div className="mt-16 mx-auto max-w-screen-xl">
        <Hero />
      </div>
    </>
  );
}

export default App;
