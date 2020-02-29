import React from "react";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size = "", subtitle = "Shop now" }) => (
  <div className={"menu-items " + size}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="product-thumnail"
    ></div>

    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default MenuItem;
