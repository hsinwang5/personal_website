import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="hero-screen">
        <div className="intro">
          <div className="intro__triangle1" />
          <div className="intro__triangle2" />
          <div className="intro__grow-triangle1" />
          <div className="intro__grow-triangle2" />
          <div className="intro__nameplate">
            SHEN
            <div className="intro__nameplate--first" />
            <div className="intro__nameplate--last" />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
