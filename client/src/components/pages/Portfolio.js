import React, { Component } from "react";

import PortfolioLine from "../portfolioLayout/PortfolioLine";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-page">
        <div className="portfolio-line">
          <PortfolioLine direction="left" top="0" />
          <PortfolioLine direction="right" />
        </div>
        <div className="portfolio">
          <div className="portfolio__item portfolio__item--item1" />
          <div className="portfolio__item portfolio__item--item2" />
          <div className="portfolio__item portfolio__item--item3" />
          <div className="portfolio__item portfolio__item--item4" />
        </div>
      </div>
    );
  }
}

export default Portfolio;
