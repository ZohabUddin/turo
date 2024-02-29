import React from "react";
import "./index.css";

export default function Card2(props) {
  return (
      <div className="slider2CardContainer">
        <div className="slider2ImgContainer">
          <img className="slider2Img" src={props.imgSrc} />
        </div>
        <div className="slider2Container2">
          <div className="slider2Container2Text1">
            <span className="slider2Container2Text1a">{props.text1}</span>
            <span className="slider2Container2Text1b">{props.text2}</span>
          </div>
          <div className="slider2Container2Text2">
            <p className="slider2Container2Text2Para">{props.text3}</p>
          </div>
          <div className="slider2BtnContainer">
            <button className="slider2Btn">Browse cars</button>
          </div>
        </div>
      </div>
  );
}
