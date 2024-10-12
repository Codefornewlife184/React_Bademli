import React from "react";
import Contact from "../Components/contact/Contact";
import Slider2 from "../Components/common/Slider2";
import Product from "../Components/product/Product";
import Portfolio from "../Components/portfolio/Portfolio";
import Galeri from "../galeri/Galeri";
import OtherPage from "../Components/portfolio/OtherPage";
import Spacer2 from "../Components/common/Spacer2";
import Evolution from "../Components/development/Evolution";
import Aboutus from "../Components/about/Aboutus";
import About from "../Components/about/About";
import Education from "../Components/education/Education";
import Pro from "../Components/product/Pro";
import Products from "../Components/product/Products";
import Dynamic from "../Components/dynamic/Dynamic";
import Spacer3 from "../Components/common/Spacer3";
import Urun from "../Components/product/Urun";
import ProductOne from "../Components/product/ProductOne";
import Hero from "../Components/common/Hero";
import ProDyna from "../Components/product/ProDyna";
import TopBar from "../Components/common/TopBar";


function HomePage() {
  return (
    <>      
      {/* <Hero/> */}
      <TopBar/>
      <Spacer3 />
      <Slider2/>
      <Spacer2 />
      <Aboutus />
      <About />
      <Evolution />
      <Pro/>
      <Spacer2 />
      <Dynamic />
      <Urun/>
      <Spacer2 />
      <Education />
      <Spacer2 />
      <Portfolio />
      <Spacer2 />
      <Contact />
    </>
  );
}

export default HomePage;
