import "./index.css";
import Card5 from "../Card5";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import less from "../../images/lesserthan.svg";
import great from "../../images/greaterthan.svg";

export default function Slider5() {
  const cardProps = [
    {
      hostImg:
        "https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg",
      hostName: "Kevin M.",
      hostTrips: "601 tips . Joined Aug 2020",
      hostReviews: "The absolute best Nissan Sentra I have ever driven",
      hostReviewDate: "Arnold Delwin D. - Feb 2023",
    },
    {
      hostImg:
        "https://images.turo.com/media/driver/oIuGRUy_SD2f3BuB6MFj7A.160x160.jpg",
      hostName: "Saul Z",
      hostTrips: "292 trips . Joined May 2021",
      hostReviews: "The car was great!",
      hostReviewDate: "James L. - Jan 2023",
    },
    {
      hostImg:
        "https://images.turo.com/media/driver/bL03pkUGQ4GgZv-y1XzKRw.160x160.jpg",
      hostName: "Artem S.",
      hostTrips: "564 trips . Joined Oct 2017",
      hostReviews: "Best host!",
      hostReviewDate: "Kalorin S. - Feb 2023",
    },
    {
      hostImg:
        "https://images.turo.com/media/driver/f_VkwIWpQ-WIMrha_oRisQ.160x160.jpg",
      hostName: "Derrick H.",
      hostTrips: "1,170 trips . Joined Sep 2017",
      hostReviews:
        "Fantastic service unbelievably fun car Derek always makes it very easy.",
      hostReviewDate: "Chad H. - Dec 2022",
    },

    {
      hostImg:
        "https://images.turo.com/media/driver/kFR_K6gDQ4ivXlIQXyaC-w.160x160.jpg",
      hostName: "Mohammed A.",
      hostTrips: "1,110 trips Joined Apr 2015",
      hostReviews:
        "He was clear about the existing condition of the car at pickup and was flexible for pickup and drop off.",
      hostReviewDate: "Sarah F. - Jan 2023",
    },
    {
      hostImg:
        "https://images.turo.com/media/driver/qvlYSNqeStqcMJv2Lbq8MA.160x160.jpg",
      hostName: "CARS FROM ARS ..",
      hostTrips: "466 trips . Joined Aug 2015",
      hostReviews:
        "Including when I needed to make a slight adjustment to my reservation.",
      hostReviewDate: "Michael W. - Jan 2023",
    },
    {
      hostImg:
        "https://images.turo.com/media/driver/GYXLNy3eTj-9112VMxeI0g.160x160.jpg",
      hostName: "Laura W.",
      hostTrips: "375 trips. Joined Jan 2018",
      hostReviews: "Fun car Laura was so nice.",
      hostReviewDate: "Jairo A A. - Jan 2023",
    },
    {
      hostImg:
        "https://images.turo.com/media/driver/zpaZmE29QHaLypyAXccC-A.160x160.jpg",
      hostName: "Igor K.",
      hostTrips: "617 trips . Joined Nov 2020",
      hostReviews:
        "🙌  Igor was very easy to  deal with and had very clear communication.",
      hostReviewDate: "Nolan T. - Jan 2023",
    },
    {
      hostImg:
        "https://images.turo.com/media/driver/ij04bT3rTlGLf_MFHCIh1g.160x160.jpg",
      hostName: "Ivan A.",
      hostTrips: "4,197 trips . Joined Jun 2019",
      hostReviews:
        "Responded very quickly and flexible with changing plans and trip.",
      hostReviewDate: "Kayla P. - Feb 2023",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 800;
  const isTablet = windowWidth > 800 && windowWidth <= 1200;
  const isLaptop = windowWidth > 1200;

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
    <div className="carouselContainer5">
      <div className="carouselHeading1Container">
        <p className="carouselHeading1">Browse by make</p>
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
        <Carousel className="slider5MainContainer" ref={carouselRef} draggable slidesToShow={1}>
          {cardProps.map((item) => {
            return (
              <Card5
                hostImg={item.hostImg}
                hostName={item.hostName}
                hostTrips={item.hostTrips}
                hostReviews={item.hostReviews}
                hostReviewDate={item.hostReviewDate}
              />
            );
          })}
        </Carousel>
      )}
      {isTablet && (
        <Carousel className="slider5MainContainer" ref={carouselRef} draggable slidesToShow={2}>
          {cardProps.map((item) => {
            return (
              <Card5
                hostImg={item.hostImg}
                hostName={item.hostName}
                hostTrips={item.hostTrips}
                hostReviews={item.hostReviews}
                hostReviewDate={item.hostReviewDate}
              />
            );
          })}
        </Carousel>
      )}
      {isLaptop && (
        <Carousel className="slider5MainContainer" ref={carouselRef} draggable slidesToShow={3}>
          {cardProps.map((item) => {
            return (
              <Card5
                hostImg={item.hostImg}
                hostName={item.hostName}
                hostTrips={item.hostTrips}
                hostReviews={item.hostReviews}
                hostReviewDate={item.hostReviewDate}
              />
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
