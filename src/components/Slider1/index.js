import "./index.css";
import React, { useEffect, useRef, useState } from "react";
import Card1 from "../Card1";
import { Carousel } from "antd";
import less from '../../images/lesserthan.svg'
import great from '../../images/greaterthan.svg'

export default function Slider1() {
  const cardProps = [
    {
      title: "Jeep",
      source:
        "https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg",
    },
    {
      title: "Tesla",
      source:
        "https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg",
    },
    {
      title: "Subaru",
      source:
        "https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg",
    },
    {
      title: "Porsche",
      source:
        "https://resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg",
    },
    {
      title: "BMW",
      source:
        "https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg",
    },
    {
      title: "Mercedes-Benz",
      source:
        "https://resources.turo.com/f/81934/386x308/065308f2c4/image_make_mb-2x.jpg",
    },
    {
      title: "Toyota",
      source:
        "https://resources.turo.com/f/81934/386x308/2809ca8702/image_make_toyota-2x.jpg",
    },
    {
      title: "Nissan",
      source:
        "https://resources.turo.com/f/81934/386x308/994b145776/image_make_nissan-2x.jpg",
    },
    {
      title: "Lamborghini",
      source:
        "https://resources.turo.com/f/81934/386x308/a470b4f290/image_make_lambo-2x.jpg",
    },
    {
      title: "Ford",
      source:
        "https://resources.turo.com/f/81934/386x308/0431f873ac/image_make_ford-2x.jpg",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 425;
  const isTablet = windowWidth > 425 && windowWidth <= 768;
  const isLaptop = windowWidth > 768 && windowWidth <= 992;
  const isDesktop = windowWidth > 992 && windowWidth <= 1200;
  const isLargeDesktop = windowWidth > 1200;

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
    <div className="carouselContainer1">
      <div className="carouselHeading1Container">
        <p className="carouselHeading1">Browse by make</p>
        <div className="carousel1BtnContainer">
          <img className="carousel1BtnStyling" src={less} onClick={prevSlide}  alt="previous"/>
          <img className="carousel1BtnStyling" src={great} onClick={nextSlide} alt="next"/>
        </div>
      </div>
      {isMobile && (
        <Carousel ref={carouselRef}
          className="slider1MainContainer"
          slidesToShow={1}
          draggable
          dots={false}
        >
          {cardProps.map((item) => {
            return <Card1 title={item.title} source={item.source} />;
          })}
        </Carousel>
      )}

      {isTablet && (
        <Carousel ref={carouselRef} className="slider1MainContainer" slidesToShow={2} draggable>
          {cardProps.map((item) => {
            return <Card1 title={item.title} source={item.source} />;
          })}
        </Carousel>
      )}

      {isLaptop && (
        <Carousel ref={carouselRef} className="slider1MainContainer" slidesToShow={3} draggable>
          {cardProps.map((item) => {
            return <Card1 title={item.title} source={item.source} />;
          })}
        </Carousel>
      )}

      {isDesktop && (
        <Carousel ref={carouselRef} className="slider1MainContainer" slidesToShow={4} draggable>
          {cardProps.map((item) => {
            return <Card1 title={item.title} source={item.source} />;
          })}
        </Carousel>
      )}
      {isLargeDesktop && (
        <Carousel ref={carouselRef} className="slider1MainContainer" slidesToShow={5} draggable>
          {cardProps.map((item) => {
            return <Card1 title={item.title} source={item.source} />;
          })}
        </Carousel>
      )}
    </div>
  );
}
