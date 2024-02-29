import React from "react";
import "./index.css";
import servicesImg from "../../images/services.svg";

export default function Image3() {
  return (
    <div className="img3MainContainer">
      <div className="img3Section1">
        <p className="img3Section1Text1">Become a host &gt;</p>
        <p className="img3Section1Text2">
          Accelerate your entrepreneurship and start building a small car
          sharing business on Turo.
        </p>
      </div>
      <div className="img3Section2">
        <img className="img3Section2ImgStyling" src={servicesImg} />
      </div>
      <div className="img3Section3">
        <p className="img3Section2Text1">Book a car &gt;</p>
        <p className="img3Section2Text2">
          Down the street or across the country, find the perfect vehicle for
          your next adventure.
        </p>
      </div>
    </div>
  );
}
