import React, { Component } from "react";

import PortfolioLine from "../portfolioLayout/PortfolioLine";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.testFunc = this.testFunc.bind(this);
  }

  testFunc() {
    console.log("waypoint entered");
  }

  render() {
    //Calculates height of entire portfolio for element stacking purposes
    //since portfolio makes use of absolute and relative positioning
    //height is height of all 6 portfolio items times 6
    let width = Math.round(window.innerWidth * 0.3 * 0.69);
    width = width > 225 ? 225 : width;
    const height = Math.round(width * 2.115);
    const Style = {
      height: height * 6
    };

    return (
      <div className="portfolio-page" style={Style}>
        <div className="portfolio-line">
          <PortfolioLine
            picture="images/hibachi.png"
            direction="left"
            place={0}
            text={"Hibachi"}
          />
          <PortfolioLine
            picture="images/color_picker_game.png"
            direction="right"
            place={1}
            text={"Color Picker Game"}
          />
          <PortfolioLine
            picture="images/jade_garden.png"
            direction="left"
            place={2}
            text={"Jade Garden"}
          />
          <PortfolioLine
            picture="images/simon.png"
            direction="right"
            place={3}
            text={"Simon Game"}
          />
          <PortfolioLine
            picture="images/developer_network.png"
            direction="left"
            place={4}
            text={"Developer Network"}
          />
          <PortfolioLine
            picture="images/camp.png"
            direction="right"
            place={5}
            text={"Camps (REST)"}
          />
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
