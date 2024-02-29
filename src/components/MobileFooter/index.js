import React from "react";
import "./index.css";

import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/youtube.svg";
import { ReactComponent as Appstore } from "../../images/appstore.svg";
import playstore from "../../images/playstore.svg";
import arrow from "../../images/arrow.svg";
import flag from "../../images/flag.svg";
import Accord2 from "../Accord2";

export default function MobileFooter() {
  const listItems1 = [
    "About",
    "Team",
    "Policies",
    "Careers",
    "Press",
    "OpenRoad",
    "Turo shop",
  ];
  const listItems2 = [
    "USA (EN)",
    "Australia (EN)",
    "Canada (EN)",
    "Canada (FR)",
    "France (FR)",
    "UK (EN)",
  ];
  const listItems3 = ["Book a car", "Weddings", "Trust & safety", "Get help"];
  const listItems4 = [
    "List your car",
    "Carculator",
    "All-Star Hosts",
    "Host tools",
    "Insurance & protection",
  ];
  const listItems5 = [
    "Cars",
    "Trucks",
    "Vans",
    "Exotic & Luxury",
    "Convertibles",
    "Sport",
    "Classics",
    "Minivans",
    "SUVs",
    "Electric vehicles",
  ];
  const listItems6 = [
    "Tesla",
    "Porsche",
    "Jeep",
    "BMW",
    "Toyota",
    "Subaru",
    "Lamborghini",
    "Ferrari",
    "Mercedes-Benz",
    "Rolls-Royce",
  ];
  const listItems7 = [
    "Atlanta",
    "Boston",
    "Charlotte",
    "Chicago",
    "Denver",
    "Fort Lauderdale",
    "Honolulu",
    "Houston",
    "Las Vegas",
    "Los Angeles",
    "Jersey City",
    "Philadelphia",
    "Dallas",
    "Jacksonville",
    "Miami",
    "New Orleans",
    "New York",
    "Orlando",
    "Phoenix",
    "San Antonio",
    "San Diego",
    "San Francisco",
    "Seattle",
    "Washington DC",
  ];

  const data = [
    { header: "Turo", items: listItems1 },
    { header: "Locations", items: listItems2 },
    { header: "Explore", items: listItems3 },
    { header: "Hosting", items: listItems4 },
    { header: "Vehicle types", items: listItems5 },
    { header: "Makes", items: listItems6 },
    { header: "Top cities", items: listItems7 },
  ];

  return (
    <div className="mobileFooter">
      <div className="mobileFooterSection1">
        <div className="mobileFooterSection1a">
          <img className="iconSpacing" src={facebook} alt="social icons" />
          <img className="iconSpacing" src={twitter} alt="social icons" />
          <img className="iconSpacing" src={instagram} alt="social icons" />
          <img className="iconSpacing" src={youtube} alt="social icons" />
          <span className="mobileFooterSection1aText iconSpacing">BLOG</span>
        </div>
        <div className="mobileFooterSection1b">
          <Appstore className="icon2Spacing" />
          <img className="icon2Spacing" src={playstore} alt="icon" />
        </div>
        <div className="mobileFooterSection1c">
          <img className="icon3Spacing" src={arrow} alt="icon" />
          <img className="icon3Spacing" src={flag} alt="icon" />
          <span className="icon3Spacing  mobileFooterSection1cText1">
            English
          </span>
        </div>
      </div>
      <div className="mobileFooterSection2">
        {data.map((item, index) => {
          return (
            <Accord2
              accordHeader={item.header}
              listItems={item.items}
              key={index}
            />
          );
        })}
      </div>
      <div className="mobileFooterSection3">
        <div className="mobileFooterSection3a">
          <p className="mobileFooterSection3aText">©2024 Turo</p>
          <p className="mobileFooterSection3aText">Terms</p>
          <p className="mobileFooterSection3aText">Privacy</p>
          <p className="mobileFooterSection3aText">Sitemap</p>
          <p className="mobileFooterSection3aText">Cookie preferences</p>
          <p className="mobileFooterSection3aText">
            Do not sell or share my personal information
          </p>
        </div>
      </div>
    </div>
  );
}
