import React, { Component } from "react";

import Triangle from "../layout/Triangle";
import Nameplate from "../layout/Nameplate";
import EnterSubtext from "../layout/EnterSubtext";
import Avatar from "../layout/Avatar";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleTriangle1: 0,
      scaleTriangle2: 0
    };
  }

  componentWillMount() {
    //timer for triangle 1 on hero page
    setTimeout(() => {
      this.setState({
        scaleTriangle1: 1
      });
    }, 500);
    //timer for triangle 2 on hero page
    setTimeout(() => {
      this.setState({
        scaleTriangle2: 1
      });
    }, 1500);
  }

  render() {
    return (
      <div className="hero-screen">
        <div className="intro">
          <Triangle top="8%" delay=".5s" scale={this.state.scaleTriangle1} />
          <Triangle top="20%" delay="1.5s" scale={this.state.scaleTriangle2} />
          <Nameplate />
          <EnterSubtext />
          <Avatar />
        </div>
      </div>
    );
  }
}

export default Hero;
