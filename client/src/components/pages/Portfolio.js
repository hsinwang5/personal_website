import React, { Component } from "react";

import PortfolioLine from "../portfolioLayout/PortfolioLine";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  // componentDidMount() {
  //   //This sets pixel perfect width of circles - necessary due to rounding errors in CSS
  //   const nodeHeight = Math.round(this.myRef.current.offsetWidth * 0.69);
  //   this.setState({
  //     width: nodeHeight
  //   });
  //   console.log(window.innerWidth);
  // }

  render() {
    //calculates width of circle, accounting for CSS rounding errors when using %
    // const width = Math.round(window.innerWidth * 0.3 * 0.69);
    return (
      <div className="portfolio-page">
        <div className="portfolio-line" ref={this.myRef}>
          <PortfolioLine direction="left" place={0} />
          <PortfolioLine direction="right" place={1} />
          <PortfolioLine direction="left" place={2} />
          <PortfolioLine direction="right" place={3} />
          <PortfolioLine direction="left" place={4} />
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
