import React from "react";
import "./index.css";
import ratingHostIcon from "../../images/ratingHostIcon.svg";
import ratingStarIcon from "../../images/ratingStarIcon.svg";

export default function Card5(props) {
  return (
    <div className="card5Container">
      <div className="card5MainContainer">
        <div className="card5Section1">
          <div className="card5Section1a">
            <img
              className="card5Section1aImg"
              src={props.hostImg}
              alt="host avatar"
            />
          </div>

          <div className="card5Section1b">
            <p className="card5Section1bText1">{props.hostName}</p>
            <div className="card5Section1bRatingContainer">
              <img className="card5Section1bImg" src={ratingHostIcon} />
              <p className="card5Section1bText2">All-Star Host</p>
            </div>
            <p className="card5Section1bText3">{props.hostTrips}</p>
          </div>
        </div>
        <div className="card5Section2">
          <img src={ratingStarIcon} alt="rating" />
          <img src={ratingStarIcon} alt="rating" />
          <img src={ratingStarIcon} alt="rating" />
          <img src={ratingStarIcon} alt="rating" />
          <img src={ratingStarIcon} alt="rating" />
        </div>
        <div className="card5Section3">
          <p className="card5Section3Text1">{props.hostReviews}</p>
        </div>
        <div className="card5Section4">
          <p className="card5Section4Text1">{props.hostReviewDate}</p>
        </div>
      </div>
    </div>
  );
}
