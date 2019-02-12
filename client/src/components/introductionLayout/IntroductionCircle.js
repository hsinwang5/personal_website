import React, { Component } from "react";
import Waypoint from "react-waypoint";

class PortfolioLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 1,
      top: 0,
      width: 0
    };

    this.calculateSize = this.calculateSize.bind(this);
    this.testFunc = this.testFunc.bind(this);
  }

  testFunc() {
    console.log("waypoint entered");
  }

  render() {
    let Style;
    if (this.props.direction === "left") {
      Style = {
        top: this.state.top,
        borderTopLeftRadius: "1000px",
        borderBottomLeftRadius: "1000px",
        borderRight: "5px",
        height: `${this.state.height}px`,
        left: `-16%`,
        width: `${this.state.width}px`
      };
    } else {
      Style = {
        top: this.state.top,
        borderTopRightRadius: "1000px",
        borderBottomRightRadius: "1000px",
        borderLeft: "5px",
        height: `${this.state.height}px`,
        right: `-16%`,
        width: `${this.state.width}px`
      };
    }
    return (
      <div className="portfolio-container">
        <div className="portfolio-line__circle" style={Style}>
          <Waypoint onEnter={this.testFunc} topOffset={"-50%"} />
        </div>
      </div>
    );
  }
}

export default PortfolioLine;
