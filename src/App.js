import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Heading1 from "./components/Heading1";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";
import Slider3 from "./components/Slider3";
import Heading2 from "./components/Heading2";
import Image2 from "./components/Image2";
import Slider4 from "./components/Slider4";
import GiftCard from "./components/GiftCard";
import Heading3 from "./components/Heading3";
import Slider5 from "./components/Slider5";
import Image3 from "./components/Image3";
import Heading4 from "./components/Heading4";
import AccordContainer from "./components/AccordContainer";
import ConditionContainer from "./components/ConditionContainer";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <SearchBar />
      <Heading1 />
      <Slider1 />
      <Slider2 />
      <Slider3 />
      <Heading2 />
      <Image2 />
      <Slider4 />
      <GiftCard />
      <Heading3 />
      <Slider5 />
      <Image3 />
      <Heading4 />
      <AccordContainer />
      <ConditionContainer />
      {isMobile && <MobileFooter />}
      {isTablet && <Footer />}
    </div>
  );
}

export default App;
