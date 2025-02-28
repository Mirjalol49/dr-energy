import React from "react";
import "./Servicest.css";
import EmergencyElectricalCard from "../../../Components/ServiceCard/ServiceCard";
import Img1 from "../../../images/1.png"
import Img2 from "../../../images/2.png"
import Img3 from "../../../images/3.png"
import Img4 from "../../../images/4.png"
import Img5 from "../../../images/5.png"
import Img6 from "../../../images/6.png"
const Services = () => {
  return (
    <section className="services-section" id='services'>
      <div className="container">
        <div className="services-title-box">
          <img
            className="services-fibre-blue"
            src="https://cdn.prod.website-files.com/66f640312f7f00d6ffb0ebd0/66fce17b6b44f080a5ff61e6_cta-decoration-02.svg"
            alt="fibre"
          />
          <h2 className="services-title">Our Services</h2>
          <img
            className="services-fibre-red"
            src="https://cdn.prod.website-files.com/66f640312f7f00d6ffb0ebd0/66fbaaa900e21349aab25876_footer-decoration-02.svg"
            alt="fibre"
          />
        </div>
        <div className="services-cards">
        <EmergencyElectricalCard image={Img1} category={"Commercial"} title={"Electrical Safety Inspections"} description={"Regular electrical safety inspections help identify potential hazards and ensure"} linkText={"Learn More →"} linkUrl={"1"}/>
        <EmergencyElectricalCard image={Img2} category={"Industrial"} title={"Emergency Electrical Services"} description={"Our 24/7 emergency response team is ready to address electrical emergencies"} linkText={"Learn More →"} linkUrl={"1"}/>
        <EmergencyElectricalCard image={Img3} category={"Residential"} title={"Wiring and Rewiring Services"} description={"We offer professional wiring and rewiring services, whether you need a new"} linkText={"Learn More →"} linkUrl={"1"}/>
        <EmergencyElectricalCard image={Img4} category={"Industrial"} title={"EV Charging Station Installation"} description={"If your electrical panel is outdated or no longer meeting your power demands"} linkText={"Learn More →"} linkUrl={"1"}/>
        <EmergencyElectricalCard image={Img5} category={"Residential"} title={"Lighting Installation and Design"} description={"We specialize in installing and designing indoor and outdoor lighting solutions"} linkText={"Learn More →"} linkUrl={"1"}/>
        <EmergencyElectricalCard image={Img6} category={"Commercial"} title={"Electrical Repairs and Troubleshooting"} description={"Our team of skilled electricians can diagnose and repair electrical issues"} linkText={"Learn More →"} linkUrl={"1"}/>
        </div>
      </div>
    </section>
  );
};

export default Services;
