import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Card3 from "../Card3";
import { Carousel } from "antd";
import less from "../../images/lesserthan.svg";
import great from "../../images/greaterthan.svg";

const Slider3 = () => {
  const cardProps = [
    {
      text: "Los Angeles",
      pic: "https://resources.turo.com/f/81934/240x240/7825448638/illo_city_losangeles-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/76b4007676/illo_city_losangeles_hover-2x.png",
    },
    {
      text: "Miami",
      pic: "https://resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/ebf31d579f/illo_city_miami_hover-2x.png",
    },
    {
      text: "Honolulu",
      pic: "https://resources.turo.com/f/81934/240x240/bbe188de38/illo_city_honolulu-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/ee089eef85/illo_city_honolulu_hover-2x.png",
    },
    {
      text: "Sydney",
      pic: "https://resources.turo.com/f/81934/240x240/24053a444a/illo_city_sydney-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/7f00f3cc97/illo_city_sydney_hover-2x.png",
    },
    {
      text: "London",
      pic: "https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/957c774400/illo_city_london_hover-2x.png",
    },
    {
      text: "Toronto",
      pic: "https://resources.turo.com/f/81934/240x240/87ab56dd05/illo_city_toronto-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/f40b3c1e95/illo_city_toronto_hover-2x.png",
    },
    {
      text: "Jersey City",
      pic: "https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/8a4598d799/illo_city_jerseycity_hover-2x.png",
    },
    {
      text: "San Francisco",
      pic: "https://resources.turo.com/f/81934/240x240/c00858690e/illo_city_sanfrancisco-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/3f9757ed81/illo_city_sanfrancisco_hover-2x.png",
    },
    {
      text: "Atlanta",
      pic: "https://resources.turo.com/f/81934/240x240/a49b80f1ba/illo_city_atlanta-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/1a1efd8d1e/illo_city_atlanta_hover-2x.png",
    },
    {
      text: "Phoenix",
      pic: "https://resources.turo.com/f/81934/240x240/af92b78ef2/illo_city_phoenix-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/b20a87cb5f/illo_city_phoenix_hover-2x.png",
    },
    {
      text: "Orlando",
      pic: "https://resources.turo.com/f/81934/240x240/fba7dae74f/illo_city_orlando-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/48caa5117b/illo_city_orlando_hover-2x.png",
    },
    {
      text: "Las Vegas",
      pic: "https://resources.turo.com/f/81934/240x240/184058bb96/illo_city_lasvegas-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/c2abf3de26/illo_city_lasvegas_hover-2x.png",
    },
    {
      text: "Dallas",
      pic: "https://resources.turo.com/f/81934/240x240/b7eaeead8f/illo_city_dallas-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/34f2d3a05f/illo_city_dallas_hover-2x.png",
    },
    {
      text: "Washington DC",
      pic: "https://resources.turo.com/f/81934/240x240/f29a6189f8/illo_city_washingtondc-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/158f7fa72b/illo_city_washingtondc_hover-2x.png",
    },
    {
      text: "Chicago",
      pic: "https://resources.turo.com/f/81934/240x240/b919d90a34/illo_city_chicago-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/6512407c18/illo_city_chicago_hover-2x.png",
    },
    {
      text: "Houston",
      pic: "https://resources.turo.com/f/81934/240x240/35cc2cbc9d/illo_city_houston-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/29eb3f7660/illo_city_houston_hover-2x.png",
    },
    {
      text: "San Diego",
      pic: "https://resources.turo.com/f/81934/240x240/382323a545/illo_city_sandiego-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/9a4ae77dbb/illo_city_sandiego_hover-2x.png",
    },
    {
      text: "Boston",
      pic: "https://resources.turo.com/f/81934/240x240/4201e99699/illo_city_boston-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/1a1fdfb037/illo_city_boston_hover-2x.png",
    },
    {
      text: "Denver",
      pic: "https://resources.turo.com/f/81934/240x240/81f82e7068/illo_city_denver-2x.png",
      picHover:
        "https://resources.turo.com/f/81934/240x240/8b414f123e/illo_city_denver_hover-2x.png",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 425;
  const isTablet = windowWidth > 425 && windowWidth <= 768;
  const isLaptop = windowWidth > 768 && windowWidth <= 992;
  const isDesktop = windowWidth > 992 && windowWidth <= 1200;
  const isLargeDesktop = windowWidth > 1200;

  useEffect(() => {
    cardProps.forEach((item) => {
      const img1 = new Image();
      img1.src = item.pic;
      const img2 = new Image();
      img2.src = item.picHover;
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const carouselRef = useRef();
  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  return (
    <div className="carouselContainer3">
      <div className="carouselHeadingContainer3">
        <p className="carouselHeading3">Browse by destination</p>
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
        <Carousel ref={carouselRef} slidesToShow={2} draggable={true}>
          {cardProps.map((item) => (
            <Card3
              key={item.text}
              pic={item.pic}
              picHover={item.picHover}
              text={item.text}
            />
          ))}
        </Carousel>
      )}

      {isTablet && (
        <Carousel ref={carouselRef} slidesToShow={3} draggable={true}>
          {cardProps.map((item) => (
            <Card3
              key={item.text}
              pic={item.pic}
              picHover={item.picHover}
              text={item.text}
            />
          ))}
        </Carousel>
      )}

      {isLaptop && (
        <Carousel ref={carouselRef} slidesToShow={4} draggable={true}>
          {cardProps.map((item) => (
            <Card3
              key={item.text}
              pic={item.pic}
              picHover={item.picHover}
              text={item.text}
            />
          ))}
        </Carousel>
      )}

      {isDesktop && (
        <Carousel ref={carouselRef} slidesToShow={5} draggable={true}>
          {cardProps.map((item) => (
            <Card3
              key={item.text}
              pic={item.pic}
              picHover={item.picHover}
              text={item.text}
            />
          ))}
        </Carousel>
      )}

      <div className="carouselContainer3Slider">
        {isLargeDesktop && (
          <Carousel ref={carouselRef} slidesToShow={6} draggable={true}>
            {cardProps.map((item) => (
              <Card3
                key={item.text}
                pic={item.pic}
                picHover={item.picHover}
                text={item.text}
              />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Slider3;
