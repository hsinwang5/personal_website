import React, { Component } from "react";
import Waypoint from "react-waypoint";
import classnames from "classnames";

class IntroductionCircle extends Component {
  /*
  2 props: aniRight and aniLeft. Pass aniRight for a circle animating right,
  and vice versa.
  */
  constructor(props) {
    super(props);

    this.state = {
      left: "-10vw",
      right: "-10vw",
      top: this.props.top,
      topOffset: "22%"
    };

    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  componentWillMount() {
    let topOffset = window.innerWidth <= 850 ? "19%" : "18%";
    this.setState({
      topOffset
    });
  }
  //returns the circles to introduction section
  onEnter() {
    if (this.props.aniRight) {
      let left = "-10vw";
      let top = this.props.top;
      this.setState({
        left,
        top
      });
    }
    if (this.props.aniLeft) {
      let right = "-10vw";
      let top = this.props.top;
      this.setState({
        right,
        top
      });
    }
  }
  //animates circles down towards portfolio section
  onLeave() {
    if (this.props.aniRight) {
      let left = "20vw";
      let top = 3000;
      this.setState({
        left,
        top
      });
    }
    if (this.props.aniLeft) {
      let right = "20vw";
      let top = 3000;
      this.setState({
        right,
        top
      });
    }
  }

  render() {
    const Style = {
      top: `${this.state.top}%`,
      left: `${this.props.aniRight ? this.state.left : "none"}`,
      right: `${this.props.aniLeft ? this.state.right : "none"}`
    };
    const StyleConstant = {
      top: `${this.props.top}%`,
      left: `${this.props.aniRight ? "-8vw" : "none"}`,
      right: `${this.props.aniLeft ? "-8vw" : "none"}`
    };
    const StyleWaypoint = {
      top: `${this.props.top + 100}%`,
      left: 0,
      right: 0
    };
    return (
      <div className="introduction__anchor" style={StyleConstant}>
        <div
          className={classnames("introduction__circle", {
            "animation__introduction-circle1": this.props.aniLeft,
            "animation__introduction-circle2": this.props.aniRight,
            "introduction__circle--enter": this.state.isVisible,
            "introduction__cirlce--leave": !this.state.isVisible
          })}
          style={Style}
        />
        {/* prevents movement of the waypoint when animating div
          and allows more precise positioning */}
        <Waypoint
          onEnter={this.onEnter}
          onLeave={this.onLeave}
          topOffset={this.state.topOffset}
        >
          <div className="introduction__waypoint" style={StyleWaypoint} />
        </Waypoint>
      </div>
    );
  }
}

export default IntroductionCircle;
