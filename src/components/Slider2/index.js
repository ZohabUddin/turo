import React, { useRef } from "react";
import "./index.css";
import Card2 from "../Card2";
import { Carousel } from "antd";
import less from "../../images/lesserthan.svg";
import great from "../../images/greaterthan.svg";

export default function Slider2() {
  const cardProps = [
    {
      imgSrc:
        "https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg",
      text1: " Find the perfect car ",
      text2: "  to conquer the great outdoors ",
      text3:
        " Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.",
    },
    {
      imgSrc:
        "https://resources.turo.com/f/81934/416x284/7c424a07d5/image_unwind_416x285.jpg",
      text1: " Find the perfect car ",
      text2: " to unwind for the weekend ",
      text3:
        " From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.",
    },
    {
      imgSrc:
        "https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg",
      text1: " Find the perfect car ",
      text2: " to upgrade your vacation plans ",
      text3:
        " Skip the rental car counter and find the perfect car to complement your vacation vibe. ",
    },
    {
      imgSrc:
        "https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg",
      text1: " Find the perfect car ",
      text2: " for scenic corners & curves ",
      text3:
        " Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere. ",
    },
    {
      imgSrc:
        "https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg",
      text1: " Find the perfect car ",
      text2: " to try before you buy ",
      text3:
        " Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat. ",
    },
    {
      imgSrc:
        "https://resources.turo.com/f/81934/416x284/fa43ee8e2b/image_errand_416x285.jpg",
      text1: " Find the perfect car ",
      text2: " to make errand day easier ",
      text3:
        " Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day. ",
    },
  ];

  const carouselRef = useRef();

  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };
  return (
    <div>
      <div className="carouselContainer2">
        <div className="slider2NavBtnContainer">
          <img
            className="carousel1BtnStyling"
            src={less}
            onClick={prevSlide}
            alt="previous"
          />
          <img
            className="carousel1BtnStyling"
            src={great}
            onClick={nextSlide}
            alt="next"
          />
        </div>
        <Carousel ref={carouselRef}>
          {cardProps.map((item) => {
            return (
              <Card2
                imgSrc={item.imgSrc}
                text1={item.text1}
                text2={item.text2}
                text3={item.text3}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
