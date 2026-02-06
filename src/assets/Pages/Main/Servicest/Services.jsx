import React from "react";
import "./Servicest.css";
import EmergencyElectricalCard from "../../../Components/ServiceCard/ServiceCard";
import Img1 from "../../../images/1.png"
import Img2 from "../../../images/2.png"
import Img3 from "../../../images/3.png"
import Img4 from "../../../images/4.png"
import Img5 from "../../../images/5.png"
import Img6 from "../../../images/6.png"
import { useLanguage } from "../../../../context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { id: 1, img: Img1 },
    { id: 2, img: Img2 },
    { id: 3, img: Img3 },
    { id: 4, img: Img4 },
    { id: 5, img: Img5 },
    { id: 6, img: Img6 },
  ];

  return (
    <section className="services-section" id='services'>
      <div className="container">
        <div className="services-title-box">
          <img
            className="services-fibre-blue"
            src="https://cdn.prod.website-files.com/66f640312f7f00d6ffb0ebd0/66fce17b6b44f080a5ff61e6_cta-decoration-02.svg"
            alt="fibre"
          />
          <h2 className="services-title">{t('services.title')}</h2>
          <img
            className="services-fibre-red"
            src="https://cdn.prod.website-files.com/66f640312f7f00d6ffb0ebd0/66fbaaa900e21349aab25876_footer-decoration-02.svg"
            alt="fibre"
          />
        </div>
        <div className="services-cards">
          {services.map((service) => (
            <EmergencyElectricalCard
              key={service.id}
              image={service.img}
              category={t(`services.items.${service.id}.cat`)}
              title={t(`services.items.${service.id}.title`)}
              description={t(`services.items.${service.id}.desc`)}
              linkText={t('services.learnMore')}
              linkUrl={"1"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
