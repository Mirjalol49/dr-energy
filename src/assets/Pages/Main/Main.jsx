import Hero from "../Hero/Hero";
import Services from "./Servicest/Services";
import AboutUs from "./AboutUs/AboutUs";
import Projects from "./Projects/Projects";
import Team from "./Team/Team";
import Faq from "./Faqs/Faq";
import Contact from "./Contact/Contact";

const Main = () => {
  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <Team />
      <Projects />
      <Faq />
      <Contact />
    </main>
  );
};

export default Main;
