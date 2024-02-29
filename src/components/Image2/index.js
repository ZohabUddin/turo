import React from "react";
import "./index.css";

export default function Image2() {
  return (
    <div className="img2Container">
      <img
        className="img2Styling"
        src="https://turo.com/blog/wp-content/uploads/2023/11/Travelogue_CoreyLynch_0K0A5400_008-copy.jpg"
        alt=""
      />
      <div className="img2TextContainer">
        <p className="img2Text1">FEATURED TRAVELOGUE</p>
        <p className="img2Text2">Leaf peepin’ in New England</p>
        {/* <p className="img2Text3">
          Discover the epic waterfalls, moody weather, and lush forests of
          coastal Washington.
        </p> */}
        <p className="img2Text4">Read more</p>
      </div>
    </div>
  );
}
