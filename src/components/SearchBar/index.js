import React, { useEffect, useState } from "react";
import "./index.css";
import arrowDown from "../../images/arrowDown.svg";
import searchIcon from "../../images/searchIcon.svg";

export default function SearchBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 767;
  const isTablet = windowWidth > 767 && windowWidth <= 992;
  const isLaptop = windowWidth > 992 && windowWidth <= 1200;
  const isDesktop = windowWidth > 1200 && windowWidth <= 1500;
  const isLargeDesktop = windowWidth > 1500;

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
    <div>
      {isMobile ? (
        <div className="mobileSearchBarMainContainer">
          <div className="mobileSearchBarContainer">
            <div className="mobileSearchBarContainerSection1">
              <p className="mobileSearchBarContainerSection1Text">Where</p>
              <input
                className="mobileSearchBarContainerSection1Input"
                placeholder="City, airport, address or hotel"
              />
            </div>
            <div className="mobileSearchBarDivider"></div>
            <div className="mobileSearchBarContainerSection2">
              <p className="mobileSearchBarSection2Text">From</p>
              <div className="mobileSearchBarSection2TimeDateMainContainer">
                <div className="mobileSearchBarSection2TimeDateContainer">
                  <p className="mobileSearchBarSection2Date">02/21/2024</p>
                  <img className="mobileSearchBarSection2Img" src={arrowDown} />
                </div>
                <div className="mobileSearchBarSection2TimeDateContainer">
                  <p className="mobileSearchBarSection2Time">10:00 AM</p>
                  <img className="mobileSearchBarSection2Img" src={arrowDown} />
                </div>
              </div>
            </div>

            <div className="mobileSearchBarDivider"></div>
            <div className="mobileSearchBarContainerSection2">
              <p className="mobileSearchBarSection2Text">From</p>
              <div className="mobileSearchBarSection2TimeDateMainContainer">
                <div className="mobileSearchBarSection2TimeDateContainer">
                  <p className="mobileSearchBarSection2Date">02/24/2024</p>
                  <img className="mobileSearchBarSection2Img" src={arrowDown} />
                </div>
                <div className="mobileSearchBarSection2TimeDateContainer">
                  <p className="mobileSearchBarSection2Time">10:00 AM</p>
                  <img className="mobileSearchBarSection2Img" src={arrowDown} />
                </div>
              </div>
            </div>

            <div className="mobileSearchBarDivider"></div>

            <div className="mobileSearchBarContainerSection4">
              <button className="mobileSearchBarContainerSection4Btn">
                Search for cars
              </button>
            </div>
          </div>
          <img
            className="mobileSearchBarImg"
            src="https://resources.turo.com/f/253489/960x844/7bb22e254b/2402_hp_coreysnow2_480x422-2x.jpg"
            alt="cover"
          />
        </div>
      ) : (
        <div className="searchBarMainContainer">
          <div className="searchBarContainer">
            <div className="searchBarSection1">
              <div className="searchBarSection1SectionA">
                <p className="searchBarSection1SectionAPara1">Where</p>
              </div>
              <div className="searchBarSection1SectionB">
                <input
                  className="searchBarInput"
                  placeholder="City, airport, adress or hotel"
                />
              </div>
            </div>
            <div className="searchBarSection2">
              <div className="searchBarSection2SectionA">
                <p className="searchBarSection1SectionAPara">From</p>
              </div>
              <div className="searchBarSection2SectionB">
                <p className="searchBarSection1SectionAPara">3/24/2023</p>
                <img className="downArrow" src={arrowDown} alt="down arrow" />
                <p className="searchBarSection1SectionAPara">3/24/2023</p>
                <img className="downArrow" src={arrowDown} alt="down arrow" />
              </div>
            </div>
            <div className="searchBarSection3">
              <div className="searchBarSection3SectionA">
                <p className="searchBarSection1SectionAPara">Until</p>
              </div>
              <div className="searchBarSection3SectionB">
                <p className="searchBarSection1SectionAPara">3/24/2023</p>
                <img className="downArrow" src={arrowDown} alt="down arrow" />
                <p className="searchBarSection1SectionAPara">3/24/2023</p>
                <img className="downArrow" src={arrowDown} alt="down arrow" />
              </div>
            </div>
            <div className="searchIconContainer">
              <img src={searchIcon} alt="search button" />
            </div>
          </div>
          <div className="searchBarImgContainer">
            {isMobile && (
              <img
                className="searchBarImg"
                src="https://resources.turo.com/f/253489/960x844/7bb22e254b/2402_hp_coreysnow2_480x422-2x.jpg"
                alt=" cover"
              />
            )}
            {isTablet && (
              <img
                className="searchBarImg"
                src="https://resources.turo.com/f/253489/1536x800/4e38d24794/2402_hp_coreysnow2_768x400-2x.jpg"
                alt=" cover"
              />
            )}
            {isLaptop && (
              <img
                className="searchBarImg"
                src="https://resources.turo.com/f/253489/1984x800/0710a1fffb/2402_hp_coreysnow2_992x400-2x.jpg"
                alt=" cover"
              />
            )}
            {isDesktop && (
              <img
                className="searchBarImg"
                src="https://resources.turo.com/f/253489/2400x800/ad06e10e24/2402_hp_coreysnow2_1200x400-2x.jpg"
                alt=" cover"
              />
            )}
            {isLargeDesktop && (
              <img
                className="searchBarImg"
                src="https://resources.turo.com/f/253489/3000x800/ecfd89a29f/2402_hp_coreysnow2_1500x400-2x.jpg"
                alt=" cover"
              />
            )}
          </div>
          <div></div>
        </div>
      )}
    </div>

    // coded for mobile
  );
}
