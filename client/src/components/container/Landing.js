import React, { Component } from "react";

import Hero from "../pages/Hero";
import Portfolio from "../pages/Portfolio";

class Landing extends Component {
  render() {
    return (
      <div className="main">
        <Hero />
        <Portfolio />
      </div>
    );
  }
}

export default Landing;
