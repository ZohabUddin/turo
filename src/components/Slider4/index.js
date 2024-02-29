import "./index.css";
import Card4 from "../Card4";
import React, { useEffect, useRef, useState } from "react";
import icon1 from "../../images/slider4Icon1.svg";
import icon2 from "../../images/slider4Icon2.svg";
import icon3 from "../../images/slider4Icon3.svg";
import icon4 from "../../images/slider4Icon4.svg";
import icon5 from "../../images/slider4Icon5.svg";
import icon6 from "../../images/slider4Icon6.svg";
import { Carousel } from "antd";
import less from "../../images/lesserthan.svg";
import great from "../../images/greaterthan.svg";

export default function Slider4() {
  const cardProps = [
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/8e60a37cc1/image_experience_electric.jpg",
      card4Icon: icon1,
      card4Title: "Electric",
    },
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/1d0c1a5bd7/image_experience_deluxesuperdeluxe.jpg",
      card4Icon: icon2,
      card4Title: "Deluxe & Super Deluxe",
    },
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/0d5b069ff2/image_experience_petfriendly.jpg",
      card4Icon: icon3,
      card4Title: "Pet-friendly",
    },
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/61e1aebed5/image_experience_convertibles.jpg",
      card4Icon: icon4,
      card4Title: "Convertibles",
    },
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/6a22a954a4/image_experience_allwheeldrive.jpg",
      card4Icon: icon5,
      card4Title: "All-wheel drive",
    },
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/294b8f8aec/image_experience_classiccars.jpg",
      card4Icon: icon6,
      card4Title: "Classic cars",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth <= 600;
  const isTablet = windowWidth > 600 && windowWidth <= 992;
  const isLaptop = windowWidth > 992;

  const carouselRef = useRef();

  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="carouselContainer4">
      <div className="carousel4HeadingContainer">
        <p className="carousel4Heading">Browse by experience</p>
        <div className="carousel1BtnContainer">
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
      </div>
      {isMobile && (
        <Carousel ref={carouselRef} slidesToShow={1}>
          {cardProps.map((item) => {
            return (
              <Card4
                card4Img={item.card4Img}
                card4Icon={item.card4Icon}
                card4Title={item.card4Title}
              />
            );
          })}
        </Carousel>
      )}
      {isTablet && (
        <Carousel ref={carouselRef} slidesToShow={2}>
          {cardProps.map((item) => {
            return (
              <Card4
                card4Img={item.card4Img}
                card4Icon={item.card4Icon}
                card4Title={item.card4Title}
              />
            );
          })}
        </Carousel>
      )}
      {isLaptop && (
        <Carousel ref={carouselRef} slidesToShow={3}>
          {cardProps.map((item) => {
            return (
              <Card4
                card4Img={item.card4Img}
                card4Icon={item.card4Icon}
                card4Title={item.card4Title}
              />
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
