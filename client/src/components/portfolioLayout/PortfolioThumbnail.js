import React from "react";

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
    <div className="portfolio-item" style={Style}>
      <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
        <img src={`${props.picture}`} alt="portfolio project" />
      </a>
      {/* <img src={`${props.picture}`} alt="portfolio project" /> */}
    </div>
  );
}

export default PortfolioThumbnail;
