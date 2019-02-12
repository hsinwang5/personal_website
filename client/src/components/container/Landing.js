import React, { Component } from "react";

import Hero from "../pages/Hero";
import Introduction from "../pages/Introduction";
import Portfolio from "../pages/Portfolio";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overflow: "hidden",
      isClicked: false,
      width: "100vw",
      height: "100vh"
    };

    this.allowScroll = this.allowScroll.bind(this);
  }

  allowScroll() {
    setTimeout(() => {
      this.setState({
        overflow: "scroll",
        width: "inherit",
        height: "inherit"
      });
    }, 3000);
    this.setState({
      isClicked: true
    });
    // this.setState({
    //   overflow: "scroll",
    //   isClicked: true,
    //   width: "inherit",
    //   height: "inherit"
    // });
  }

  render() {
    const Style = {
      overflow: this.state.overflow,
      width: this.state.width,
      height: this.state.height
    };
    return (
      <div className="main" style={Style}>
        <Hero allowScroll={this.allowScroll} />
        <Introduction isClicked={this.state.isClicked} />
        <Portfolio />
      </div>
    );
  }
}

export default Landing;
