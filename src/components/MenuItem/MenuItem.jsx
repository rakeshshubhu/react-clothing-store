import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.scss";

const MenuItem = ({
  title,
  imageUrl,
  size = "",
  subtitle = "Shop now",
  linkUrl,
  match,
  history
}) => (
  <div
    className={"menu-items " + size}
    onClick={() => history.push(match.url + linkUrl)}
  >
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

export default withRouter(MenuItem);
