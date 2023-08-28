import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Separator from "./components/Separator";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Testemonials from "./pages/Testemonials";
import Contact from "./pages/Contact";


function App() {
  const [selectedPage, setSetectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      (window.scrollY === 0) ? setIsTopOfPage(true) : setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSetectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">

        { isDesktop && (
          <DotGroup
            selectedPage={selectedPage} 
            setSelectedPage={setSetectedPage}
          />
        )}

        <Landing setSelectedPage={setSetectedPage} />
        <Separator />
        <div className="w-5/6 mx-auto md:h-full">
          <Skills />
        </div>
        <Separator />
        <div className="w-5/6 mx-auto">
          <Projects />
        </div>
        <Separator />
        <div className="w-5/6 mx-auto">
          <Testemonials />
        </div>
        <Separator />
        <div className="w-5/6 mx-auto">
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
