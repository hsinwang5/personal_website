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
    let topOffset = window.innerWidth <= 850 ? "30%" : "18%";
    this.setState({
      topOffset
    });
  }

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

  onLeave() {
    if (this.props.aniRight) {
      let left = "-100vw";
      let top = "1000vh";
      this.setState({
        left,
        top
      });
    }
    if (this.props.aniLeft) {
      let right = "-100vw";
      let top = "1000vh";
      this.setState({
        right,
        top
      });
    }
  }

  render() {
    const Style = {
      top: this.state.top,
      left: `${this.props.aniRight ? this.state.left : "none"}`,
      right: `${this.props.aniLeft ? this.state.right : "none"}`
    };
    return (
      <Waypoint
        onEnter={this.onEnter}
        onLeave={this.onLeave}
        topOffset={this.state.topOffset}
      >
        <div
          className={classnames("introduction__circle", {
            "animation__introduction-circle1": this.props.aniLeft,
            "animation__introduction-circle2": this.props.aniRight,
            "introduction__circle--enter": this.state.isVisible,
            "introduction__cirlce--leave": !this.state.isVisible
          })}
          style={Style}
        />
      </Waypoint>
    );
  }
}

export default IntroductionCircle;
