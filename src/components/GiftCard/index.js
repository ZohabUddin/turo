import React from "react";
import "./index.css";

export default function GiftCard() {
  return (
    <div className="giftCardContainer">
      <div className="giftCardContainer1">
        <img
        className="giftCardContainer1Img"
          src="https://resources.turo.com/f/81934/751x423/cb9c4231e8/lm-gift-card-2x.png"
          alt=""
        />
      </div>
      <div className="giftCardContainer2">
        <p className="giftCardContainer2Heading">Shop Turo gift cards</p>
        <p className="giftCardContainer2Para">
          Introducing Turo gift cards! Give the gift of exploration or help make
          any special occasion extra-memorable.
        </p>
        <div className="giftCardContainer2BtnContainer">
          <button className="giftCardContainer2Btn">Shop gift cards</button>
        </div>
      </div>
    </div>
  );
}
