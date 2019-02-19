import React from "react";
import classnames from "classnames";

function PortfolioThumbnail(props) {
  let Style;
  if (props.direction === "left") {
    Style = {
      left: `60%`
    };
  } else {
    Style = {
      right: `230%`
    };
  }
  return (
    <div
      className={classnames({
        "portfolio-item": true,
        "animation__portfolio-item-left":
          props.scrolled && props.direction === "left" && props.thumbnailSwitch,
        "animation__portfolio-item-right":
          props.scrolled && props.direction === "right" && props.thumbnailSwitch
      })}
      style={Style}
    >
      <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
        <img src={`${props.picture}`} alt="portfolio project" />
      </a>
      {/* <img src={`${props.picture}`} alt="portfolio project" /> */}
    </div>
  );
}

export default PortfolioThumbnail;
