import React from "react";
import "./ServiceCard.css";

const EmergencyElectricalCard = ({ image, category, title, description, linkText, linkUrl }) => {
  return (
    <div className="service-card">
      <div className="service-video">
       <img className="service-img" src={image} alt="image" />
      </div>
      <div className="service-content">
        <h3 className="service-category">{category}</h3>
        <h2 className="service-title">{title}</h2>
        <p className="service-description">{description}</p>
        <a href={linkUrl} className="service-link">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default EmergencyElectricalCard;