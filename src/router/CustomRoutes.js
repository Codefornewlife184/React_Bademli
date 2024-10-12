import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AboutusPage from "../pages/AboutusPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ContactusPage from "../pages/ContactusPage";
import GaleriPage from "../pages/GaleriPage";
import SidebarPage from "../pages/SidebarPage";
import CommentsPage from "../pages/CommentsPage";
import PortfolioPage from "../pages/PortfolioPage";
import OtherPagePage from "../pages/OtherPagePage";
import EvolutionPage from "../pages/EvolutionPage";
import ProductsPage from "../pages/ProductsPage";
import DynamicPage from "../pages/DynamicPage";
import EducationPage from "../pages/EducationPage";
import ProPage from "../pages/ProPage";
/* import TopBarPage from "../pages/TopBarPage"; */

const CustomRoutes = () => {
  return (
    <Routes>
    <Route exact path="/kazanimlarimiz" element={<EducationPage />} />
      <Route exact path="/dinamiklerimiz" element={<DynamicPage />} />
      <Route exact path="/etkinliklerimiz" element={<ProPage />} />
      <Route exact path="/gelisim-alanlarimiz" element={<EvolutionPage />} />
      <Route
        exact
        path="/velilerimizin-gorusleri"
        element={<OtherPagePage />}
      />
      <Route exact path="/ailemiz" element={<PortfolioPage />} />
      <Route exact path="/Comments" element={<CommentsPage />} />
      <Route exact path="/Sidebar" element={<SidebarPage />} />
      <Route exact path="/galeri" element={<GaleriPage />} />
      <Route path="/iletisim" element={<ContactusPage />} />
      <Route exact path="/detay" element={<ProductDetailsPage />} />
      {/* <Route exact path="/TopBar" element={<TopBarPage />} /> */}
      <Route exact path="/etkinliklerimiz" element={<ProductsPage />} />
      <Route path="/iletisim" element={<ContactPage />} />
      <Route path="/hakkimizda" element={<AboutusPage />} />
      <Route path="/hakkimizda" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
