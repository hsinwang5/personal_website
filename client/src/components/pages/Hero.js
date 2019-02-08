import React, { Component } from "react";

import Triangle from "../layout/Triangle";
import Nameplate from "../layout/Nameplate";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale1: 0,
      scale2: 0
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        scale1: 1
      });
    }, 500);
    setTimeout(() => {
      this.setState({
        scale2: 1
      });
    }, 1500);
  }

  render() {
    return (
      <div className="hero-screen">
        <div className="intro">
          <Triangle top="14%" delay=".5s" scale={this.state.scale1} />
          <Triangle top="29%" delay="1.5s" scale={this.state.scale2} />
          <Nameplate />
          <div className="intro__subtext">
            <img src="/images/arrow.png" alt="pointy arrow" />
            <div className="boldtext boldtext--intro">Enter</div>
          </div>
        </div>
        <img class="avatar-img" src="/images/avatar.png" alt="pic of avatar" />
      </div>
    );
  }
}

export default Hero;
