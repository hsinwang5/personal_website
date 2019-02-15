import React, { Component } from "react";
import Waypoint from "react-waypoint";
import classNames from "classnames";

import PortfolioThumbnail from "./PortfolioThumbnail";

class PortfolioLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 1,
      top: 0,
      width: 0,
      topOffset: "20%",
      leftCircle: false,
      rightCircle: false,
      reverseLeftCircle: false,
      reverseRightCircle: false
    };

    this.myRef = React.createRef();
    this.calculateSize = this.calculateSize.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  componentWillMount() {
    //smooths animation transitions as user scrolls depending on screen height
    let topOffset = window.innerHeight <= 700 ? "120%" : "1%";
    this.setState({
      topOffset
    });
  }

  componentDidMount() {
    this.calculateSize();
  }

  //dynamically calculates the size of portfolio circles, call on render and window resize
  //done for pixel perfect rendering on wavy line
  calculateSize() {
    //borderSize is the size of the circle's border plus 1 pixel
    const borderSize = 7;
    let width = Math.round(window.innerWidth * 0.3 * 0.69);
    width = width > 225 ? 225 : width;
    this.setState(
      {
        width
      },
      () => {
        const height = Math.round(this.myRef.current.offsetWidth * 2.115);
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

  onEnter({ previousPosition, currentPosition }) {
    if (previousPosition === "below") {
      if (this.props.direction === "left") {
        this.setState({
          leftCircle: true,
          reverseLeftCircle: false
        });
      } else {
        this.setState({
          rightCircle: true,
          reverseRightCircle: false
        });
      }
    }
  }

  onLeave({ previousPosition, currentPosition }) {
    if (currentPosition === "below") {
      if (this.props.direction === "left") {
        this.setState({
          leftCircle: false,
          reverseLeftCircle: true
        });
      } else {
        this.setState({
          rightCircle: false,
          reverseRightCircle: true
        });
      }
    }
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
    const waypointStyle = {
      top: this.state.top
    };
    let lineClasses = classNames({
      "portfolio-line__circle": true,
      animation__portfolioLineSlideInLeft: this.state.leftCircle,
      animation__portfolioLineSlideInRight: this.state.rightCircle,
      animation__portfolioLineSlideInLeftReverse: this.state.reverseLeftCircle,
      animation__portfolioLineSlideInRightReverse: this.state.reverseRightCircle
    });
    return (
      <div className="portfolio-container">
        <Waypoint
          onEnter={this.onEnter}
          onLeave={this.onLeave}
          topOffset={this.state.topOffset}
        >
          <div className="throwawayp" style={waypointStyle} />
        </Waypoint>

        <div className={lineClasses} style={Style} ref={this.myRef}>
          {/* <Waypoint onEnter={this.testFunc} onLeave={this.testFunc} /> */}
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
