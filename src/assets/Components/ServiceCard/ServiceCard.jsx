import React from "react";
import "./ServiceCard.css";
import { animated } from 'react-spring';
import { useBoop } from "../../../hooks/useBoop";

const EmergencyElectricalCard = ({ image, category, title, description }) => {
  const [imgBoopStyle, triggerImgBoop] = useBoop({ scale: 1.03, timing: 250, springConfig: { tension: 300, friction: 20 } });

  return (
    <div 
      className="service-card"
      onMouseEnter={triggerImgBoop}
    >
      <div className="service-video">
        <animated.img 
            style={imgBoopStyle}
            className="service-img" 
            src={image} 
            alt={title} 
        />
      </div>
      <div className="service-content">
        <h3 className="service-category">{category}</h3>
        <h2 className="service-title">{title}</h2>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
};

export default EmergencyElectricalCard;