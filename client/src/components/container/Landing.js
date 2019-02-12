import React, { Component } from "react";

import Hero from "../pages/Hero";
import Introduction from "../pages/Introduction";
import Portfolio from "../pages/Portfolio";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overflow: "hidden",
      isClicked: false
    };

    this.allowScroll = this.allowScroll.bind(this);
  }

  allowScroll() {
    this.setState({
      overflow: "scroll",
      isClicked: true
    });
  }

  handleScroll() {
    console.log(window.pageYOffset);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    console.log("mounted");
  }

  render() {
    const Style = {
      overflow: this.state.overflow
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
