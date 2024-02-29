import React from "react";
import "./index.css";

import logo from "../../images/logo.svg";
import option from "../../images/hamburger.svg";
import user from "../../images/user.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarImgDiv">
        <img className="logoStyling" src={logo} alt="logo" />
      </div>

      <div className="navbarIconContainer">
        <div className="navbarIconContainer1">
          <button className="navbarBtn">Become a host</button>
        </div>
        <div className="navbarIconContainer2">
          <img className="navbarIcon optionStyling" src={option} alt="menu" />
          <img
            className="navbarIcon userStyling"
            src={user}
            alt="user avatar"
          />
        </div>
      </div>
    </div>
  );
}
