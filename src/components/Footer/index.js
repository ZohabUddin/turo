// import React from 'react'
// import './index.css'
// import FooterList from '../FooterList'
// import { ReactComponent as Facebook } from "../../images/facebook.svg";
// import { ReactComponent as Twitter } from "../../images/twitter.svg";
// import { ReactComponent as Instagram } from "../../images/instagram.svg";
// import { ReactComponent as Youtube } from "../../images/youtube.svg";
// import { ReactComponent as Appstore } from "../../images/appstore.svg";
// import { ReactComponent as Playstore } from "../../images/playstore.svg";
// import { ReactComponent as Arrow } from "../../images/arrow.svg";
// import { ReactComponent as Flag } from "../../images/flag.svg";
// import Ending from '../Ending';

// export default function Footer() {
//     const listItems1 = [
//         { item: 'About' },
//         { item: 'Team' },
//         { item: 'Policies' },
//         { item: 'Careers' },
//         { item: 'Press' },
//         { item: 'OpenRoad' },
//         { item: 'Turo shop' },
//     ]
//     const listItems2 = [
//         { item: 'USA (EN)' },
//         { item: 'Australia (EN)' },
//         { item: 'Canada (EN)' },
//         { item: 'Canada (FR)' },
//         { item: 'UK (EN)' },
//     ]
//     const listItems3 = [
//         { item: 'Book a car' },
//         { item: 'Weddings' },
//         { item: 'Trust & safety' },
//         { item: 'Sustainability' },
//         { item: 'FAQs' },
//         { item: 'Get help' },
//     ]
//     const listItems4 = [
//         { item: 'List your car' },
//         { item: 'Carculator' },
//         { item: 'All-Star Hosts' },
//         { item: 'Host tools' },
//         { item: 'Insurance & protection' },
//         { item: 'FAQs' },
//     ]
//     const listItemsB1 = [
//         { item: 'Trucks' },
//         { item: 'Vans' },
//         { item: 'Exotic & Luxury' },
//         { item: 'Convertibles' },
//         { item: 'Sport' },
//         { item: 'Classics' },
//         { item: 'Minivans' },
//         { item: 'SUVs' },
//         { item: 'Electric vehicles' },
//         { item: 'Cars' },]
//     const listItemsB2 = [
//         { item: 'Tesla' },
//         { item: 'Lamborghini' },
//         { item: 'Jeep' },
//         { item: 'Rolls-Royce' },
//         { item: 'Mercedes-Benz' },
//         { item: 'Ferrari' },
//         { item: 'Porsche' },
//         { item: 'BMW' },
//         { item: 'Subaru' },
//         { item: 'Maserati' },
//     ]
//     const listItemsB3 = [
//         { item: 'Atlanta' },
//         { item: 'Austin' },
//         { item: 'Boston' },
//         { item: 'Charlotte' },
//         { item: 'Chicago' },
//         { item: 'Dallas' },
//         { item: 'Denver' },
//         { item: 'Fort Lauderdale' },
//         { item: 'Honolulu' },
//         { item: 'Houston' },
//     ]
//     const listItemsB4 = [
//         { item: 'Jersey City' },
//         { item: 'Las Vegas' },
//         { item: 'London' },
//         { item: 'Los Angeles' },
//         { item: 'Miami' },
//         { item: 'Montréal' },
//         { item: 'New York' },
//         { item: 'Orlando' },
//         { item: 'Philadelphia' },
//         { item: 'Phoenix' },
//     ]
//     const listItemsB5 = [
//         { item: 'Portland' },
//         { item: 'Sacramento' },
//         { item: 'San Diego' },
//         { item: 'Los San Francisco' },
//         { item: 'Seattle' },
//         { item: 'Tampa' },
//         { item: 'Toronto' },
//         { item: 'Vancouver' },
//         { item: 'Washington DC' },
//         { item: 'Sydney' },
//     ]
//     return (
//         <div className='footer'>
//             <div className='footerSectionA'>
//                 <div className='footerSection1'>
//                     <FooterList heading='Turo' listItems={[...listItems1]} />
//                     <FooterList heading='Locations' listItems={[...listItems2]} />
//                     <FooterList heading='Explore' listItems={[...listItems3]} />
//                     <FooterList heading='Hosting' listItems={[...listItems4]} />

//                 </div>
//                 <div className='footerSection2'>
//                     <div className='section5'>
//                         <div className='sectionA'>

//                             <Facebook />
//                             <Twitter />
//                             <Instagram />
//                             <Youtube />
//                             <p className='blogPara'>blog</p>
//                         </div>
//                         <div className='sectionB'>

//                             <Appstore />
//                         </div>
//                         <div className='sectionC'>

//                             <Playstore />
//                         </div>
//                         <div className='sectionD'>
//                             <Arrow />
//                             <Flag />
//                             <p className='sectionDPara'>English</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <div className='footerSectionB'>
//                 <div className='footerSection3'>
//                     <div className='footerSection3A'>
//                         <FooterList heading='Vehicle types' listItems={[...listItemsB1]} />
//                         <FooterList heading='Makes' listItems={[...listItemsB2]} />
//                         <FooterList heading='Top cities' listItems={[...listItemsB3]} />

//                     </div>
//                     <div className='footerSection3B'>
//                         <FooterList heading='' listItems={[...listItemsB4]} />
//                         <FooterList heading='' listItems={[...listItemsB5]} />

//                     </div>
//                 </div>

//             </div>
//             <Ending />
//         </div>
//     )
// }

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
];
const listItems8 = [
  "Las Vegas",
  "Los Angeles",
  "Jersey City",
  "Philadelphia",
  "Dallas",
  "Jacksonville",
  "Miami",
  "New Orleans",
];
const listItems9 = [
  "New York",
  "Orlando",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "San Francisco",
  "Seattle",
  "Washington DC",
];

const data1 = [
  { header: "Turo", items: listItems1 },
  { header: "Locations", items: listItems2 },
  { header: "Explore", items: listItems3 },
  { header: "Hosting", items: listItems4 },
];

const data2 = [
  { header: "Vehicle types", items: listItems5 },
  { header: "Makes", items: listItems6 },
  { header: "Top cities", items: listItems7 },
  { header: " ", items: listItems8 },
  { header: " ", items: listItems9 },
];

// const CustomFooterList = (props) => {
//   return (
//     <div>
//       {props.data.map((item, index) => {
//         return (<p className="footerHead">{item.header}</p>
//         {item.items.map((text,idx)=>{
//           return (<p className="footerText">{item}</p>)
//         })})

//       })}
//     </div>
//   );
// };

const CustomFooterList = (props) => {
  return (
    <>
      {props.data.map((item, index) => {
        return (
          <div key={index}>
            <p className="footerHead">{item.header}</p>
            {item.items.map((text, idx) => {
              return (
                <p key={idx} className="footerText">
                  {text}
                </p>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default function Footer() {
  return (
    <div className="footerMainContainer">
      <div className="section1">
        <div className="section1a">
          <CustomFooterList data={data1} />
        </div>
        <div className="section1b">
          <div className="section1b1">
            <img className="section1b1Icon" src={facebook} alt="social icons" />
            <img className="section1b1Icon" src={twitter} alt="social icons" />
            <img
              className="section1b1Icon"
              src={instagram}
              alt="social icons"
            />
            <img className="section1b1Icon" src={youtube} alt="social icons" />
            <span className="section1b1Text">BLOG</span>
          </div>
          <div className="section1b2">
            <div className="section1b2ImgContainer">
              <Appstore className="section1b2Icon" />
              <img className="section1b2Icon" src={playstore} alt="icon" />
            </div>
          </div>
          <div className="section1b3">
            <img className="section1b3Icon" src={arrow} alt="icon" />{" "}
            <img className="section1b3Icon" src={flag} alt="icon" />{" "}
            <span className="section1b3Icon">English</span>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="section2a">
          <CustomFooterList data={data2} />
        </div>
      </div>
      <div className="footerSection3">
        <div className="footerSection3a">
          <p className="footerSection3aText">©2024 Turo</p>
          <p className="footerSection3aText">Terms</p>
          <p className="footerSection3aText">Privacy</p>
          <p className="footerSection3aText">Sitemap</p>
          <p className="footerSection3aText">Cookie preferences</p>
          <p className="footerSection3aText">
            Do not sell or share my personal information
          </p>
        </div>
      </div>
    </div>
  );
}
