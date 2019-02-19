import React, { Component } from "react";
import Waypoint from "react-waypoint";
import classNames from "classnames";

import PortfolioThumbnail from "./PortfolioThumbnail";
import PortfolioHeader from "./PortfolioHeader";

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
      reverseRightCircle: false,
      scrolled: false,
      thumbnailSwitch: false,
      clicked: false
    };

    this.myRef = React.createRef();
    this.calculateSize = this.calculateSize.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    //smooths animation transitions as user scrolls depending on screen height
    let topOffset = window.innerHeight <= 700 ? "90%" : "90%";
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
    console.log(window.pageYOffset);
    if (previousPosition === "below") {
      if (this.props.direction === "left") {
        this.setState({
          leftCircle: true,
          reverseLeftCircle: false,
          scrolled: true,
          thumbnailSwitch: true
        });
      } else {
        this.setState({
          rightCircle: true,
          reverseRightCircle: false,
          scrolled: true,
          thumbnailSwitch: true
        });
      }
    }
    //removes animation class from thumbnails to allow further animations
    setTimeout(() => {
      this.setState({
        thumbnailSwitch: false
      });
    }, 500);
  }
  onLeave({ previousPosition, currentPosition }) {
    if (currentPosition === "below") {
      if (this.props.direction === "left") {
        this.setState({
          leftCircle: false,
          reverseLeftCircle: true,
          scrolled: false
        });
      } else {
        this.setState({
          rightCircle: false,
          reverseRightCircle: true,
          scrolled: false
        });
      }
    }
  }
  //transforms portfolioline into textbox when thumbnail is clicked
  onClick() {
    this.setState({
      click: true
    });
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
        {/* <Waypoint
          onEnter={this.onEnter}
          onLeave={this.onLeave}
          topOffset={this.state.topOffset}
        >
          <div className="throwawayp" style={waypointStyle} />
        </Waypoint> */}
        <div
          className={classNames({
            "portfolio-line__circle": true,
            animation__portfolioLineSlideInLeft: this.state.leftCircle,
            animation__portfolioLineSlideInRight: this.state.rightCircle,
            animation__portfolioLineSlideInLeftReverse: this.state
              .reverseLeftCircle,
            animation__portfolioLineSlideInRightReverse: this.state
              .reverseRightCircle
          })}
          style={Style}
          ref={this.myRef}
        >
          <Waypoint
            onEnter={this.onEnter}
            onLeave={this.onLeave}
            topOffset={"10%"}
          >
            <div className="throwawayp" />
          </Waypoint>
          {/* <Waypoint onEnter={this.testFunc} onLeave={this.testFunc} /> */}
          <PortfolioThumbnail
            picture={this.props.picture}
            direction={this.props.direction}
            scrolled={this.state.scrolled}
            thumbnailSwitch={this.state.thumbnailSwitch}
            handleClick={this.onClick}
          />
          <PortfolioHeader
            text={this.props.text}
            direction={this.props.direction}
            scrolled={this.state.scrolled}
          />
        </div>
      </div>
    );
  }
}

export default PortfolioLine;
