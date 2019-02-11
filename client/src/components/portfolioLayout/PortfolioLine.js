import React, { Component } from "react";
import Waypoint from "react-waypoint";

import PortfolioThumbnail from "./PortfolioThumbnail";

class PortfolioLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 1,
      top: 0,
      width: 0
    };

    this.myRef = React.createRef();
    this.calculateSize = this.calculateSize.bind(this);
    this.testFunc = this.testFunc.bind(this);
  }

  componentDidMount() {
    this.calculateSize();
  }

  //dynamically calculates the size of portfolio circles, call on render and window resize
  calculateSize() {
    //borderSize is the size of the circle's border plus 1 pixel
    const borderSize = 5;
    let width = Math.round(window.innerWidth * 0.3 * 0.69);
    width = width > 225 ? 225 : width;
    console.log(width);
    this.setState(
      {
        width
      },
      () => {
        const height = Math.round(this.myRef.current.offsetWidth * 2.115);
        console.log(height);
        this.setState(
          {
            height
          },
          () => {
            //calculate the top offset, factoring in the size of the circle's border
            const top =
              this.state.height * this.props.place -
              this.props.place * borderSize;
            this.setState({
              top
            });
          }
        );
      }
    );
  }

  testFunc() {
    console.log("waypoint entered");
  }

  render() {
    let Style;
    //calculate where to place the portfolio circle along vertical axis
    //Set direction of circle + other properties in portfolio page
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
        <div className="test" />
        <div
          className="portfolio-line__circle portfolio-line__circle--circle1"
          style={Style}
          ref={this.myRef}
        >
          <Waypoint onEnter={this.testFunc} topOffset={"-50%"} />
          <PortfolioThumbnail
            picture={this.props.picture}
            direction={this.props.direction}
          />
        </div>
      </div>
    );
  }
}

export default PortfolioLine;
