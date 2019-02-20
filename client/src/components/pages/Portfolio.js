import React, { Component } from "react";

import PortfolioLine from "../portfolioLayout/PortfolioLine";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      viewportTop: 0
    };

    this.testFunc = this.testFunc.bind(this);
    this.onClick = this.onClick.bind(this);
    this.myRef = React.createRef();
  }

  testFunc() {
    console.log("waypoint entered");
  }
  //transforms portfolioline into textbox when thumbnail is clicked
  onClick() {
    // const viewportTop = window.pageYOffset + window.innerHeight * 0.05;
    const viewportTop = window.pageYOffset - this.myRef.current.offsetTop;
    this.setState({
      clicked: true,
      viewportTop
    });
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
        <div className="portfolio-line" ref={this.myRef}>
          <PortfolioLine
            picture="images/hibachi.png"
            direction="left"
            place={0}
            text={"Hibachi"}
            clicked={this.state.clicked}
            handleClick={this.onClick}
            viewportTop={this.state.viewportTop}
          />
          <PortfolioLine
            picture="images/color_picker_game.png"
            direction="right"
            place={1}
            text={"Color Picker Game"}
            clicked={this.state.clicked}
            handleClick={this.onClick}
            viewportTop={this.state.viewportTop}
          />
          <PortfolioLine
            picture="images/jade_garden.png"
            direction="left"
            place={2}
            text={"Jade Garden"}
            clicked={this.state.clicked}
            handleClick={this.onClick}
            viewportTop={this.state.viewportTop}
          />
          <PortfolioLine
            picture="images/simon.png"
            direction="right"
            place={3}
            text={"Simon Game"}
            clicked={this.state.clicked}
            handleClick={this.onClick}
            viewportTop={this.state.viewportTop}
          />
          <PortfolioLine
            picture="images/developer_network.png"
            direction="left"
            place={4}
            text={"Developer Network"}
            clicked={this.state.clicked}
            handleClick={this.onClick}
            viewportTop={this.state.viewportTop}
          />
          <PortfolioLine
            picture="images/camp.png"
            direction="right"
            place={5}
            text={"Camps (REST)"}
            clicked={this.state.clicked}
            handleClick={this.onClick}
            viewportTop={this.state.viewportTop}
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
