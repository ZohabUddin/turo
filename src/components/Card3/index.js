import React, { useState } from "react";
import "./index.css";

export default function Card3(props) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="card3MainContainer"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover ? (
        <>
          <img className="cardImgContainer " src={props.picHover} />
          <p className="cardCardText" style={{ color: "#593cfb" }}>
            {props.text}
          </p>
        </>
      ) : (
        <>
          <img className="cardImgContainer " src={props.pic} />
          <p className="cardCardText">{props.text}</p>
        </>
      )}
    </div>
  );
}

