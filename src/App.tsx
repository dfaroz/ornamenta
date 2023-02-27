import { useEffect, useState } from "react"
import Footer from "./components/moleculs/footer";
import Navbar from "./components/moleculs/navbar"
import Home from "./pages/home"
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) setIsTopOfPage(false);
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);
  
  return (
    <div className="App bg-white">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Footer 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
      />
    </div>
  )
}

export default App
