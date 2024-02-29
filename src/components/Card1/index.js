import React from "react";
import "./index.css";

export default function Card1(props) {
  return (
    <div className="slider1Card1Container">
      <div className="slider1Card1ImgContainer">
        <img className="slider1Card1Img" src={props.source} alt="car" />
      </div>
      <p className="slider1Card1Title">{props.title}</p>
    </div>
  );
}
