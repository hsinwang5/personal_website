import React, { Component } from "react";

import Triangle from "../layout/Triangle";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity1: 0,
      opacity2: 0
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        opacity1: 1
      });
    }, 1300);
    setTimeout(() => {
      this.setState({
        opacity2: 1
      });
    }, 2600);
  }

  render() {
    return (
      <div className="hero-screen">
        <div className="intro">
          <Triangle top="14%" delay="1.2s" opacity={this.state.opacity1} />
          <Triangle top="29%" delay="2.5s" opacity={this.state.opacity2} />
          <div className="intro__grow-triangle1" />
          <div className="intro__grow-triangle2" />
          <div className="intro__nameplate">
            <div className="intro__nameplate--first">Shen</div>
            <div className="intro__nameplate--last">Wang</div>
          </div>
          <div className="intro__subtext">
            <img src="/images/arrow.png" alt="pointy arrow" />
            <div className="boldtext boldtext--intro">Enter</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
