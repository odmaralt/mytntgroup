import React from "react";
import Footer from "../../components/Footer/Footer";
import LandingPage from "../../components/LandingPage/LandingPage";
import NavBar from "../../components/NavBar/NavBar";
import { ContactPage } from "../../components/ContactPage/ContactPage";
import "./HomePage.css";
import { ServicesPage } from "../../components/ServicesPage/ServicesPage";
import { ProjectsPage } from "../../components/ProjectsPage/ProjectsPage";
const HomePage = () => {
  return (
    <div id="containerHome">
      <NavBar />
      <LandingPage />
      <ServicesPage />
      <ProjectsPage />
      <ContactPage />
      <div id="secondPage">
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
