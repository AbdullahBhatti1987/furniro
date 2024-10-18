import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainHero from "../components/MainHero";
import BrowseTheRange from "../components/BrowseTheRange";
import OurProducts from "../components/OurProducts";
import { Component } from "../components/CarouselBox";
import Heading from "../components/Heading";
// import FurniroFurniture from '../components/FurniroFurniture'

function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 

  return (
    <div className="mainPic">
      <MainHero />
      <BrowseTheRange />
      <div className="w-full bg-white py-6">
        <div className="w-10/12 mx-auto">
          <Heading text={"Our Products"} />
        </div>
      </div>
      <OurProducts />
      <Component />
      {/* <FurniroFurniture/> */}
    </div>
  );
}

export default Home;
