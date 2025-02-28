import React from "react";
import Hero from "../Hero/Hero";
import Brands from "./Brands/Brands";
import Services from "./Servicest/Services";
import AboutUs from "./AboutUs/AboutUs";
import Projects from "./Projects/Projects";
import Faq from "./Faqs/Faq";
import Contact from "./Contact/Contact";
const Main = () => {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Services />
      <AboutUs/>
      <Projects/>
      <Faq/>
      <Contact/>
    </main>
  );
};

export default Main;
