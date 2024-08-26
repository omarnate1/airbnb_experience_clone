import React from "react";
import star_icon from "../assets/Star 1.png";

const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="badge_text">{badgeText}</div>}
      <img
        src={`/src/assets/${props.item.coverImg}`}
        alt="image_cover"
        className="card_image"
      />
      <div className="card_infos">
        <img src={star_icon} alt="star_icon" className="star_icon" />
        <span className="info_list ">{props.item.stats.rating}</span>
        <span className="info_list gray">({props.item.stats.reviewCount})</span>
        •<span className="info_list gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p className="price_tag">
        From ${props.item.price} / <span className="gray">person</span>
      </p>
    </div>
  );
};

export default Card;
