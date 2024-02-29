import React from "react";
import "./index.css";

const card4 = (props) => {
  return (
    <div className="card4MainContainer">
      <div className="card4ImgContainer">
        <img className="card4ImgStyling" alt="cover" src={props.card4Img} />
      </div>
      <div className="card4Section2">
        <div className="card4IconContainer">
          <img className="card4IconStyling" alt="icon" src={props.card4Icon} />
        </div>
        <div className="card4TextContainer">
          <p className="card4Title">{props.card4Title}</p>
        </div>
      </div>
    </div>
  );
};

export default card4;
