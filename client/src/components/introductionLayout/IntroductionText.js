import React, { Component } from "react";
import classnames from "classnames";

class IntroductionText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const strArray = this.props.text.split("");
    const spans = strArray.map((char, index) => (
      <span
        key={index}
        style={{
          transitionDelay: this.props.introScrolled
            ? "0s"
            : `${index * 0.02 + this.props.delay}s`
        }}
        className={classnames("introduction__char", {
          "introduction__char--transition": this.props.isClicked,
          inactive: this.props.introScrolled
        })}
      >
        {char}
      </span>
    ));
    const Style = {
      paddingTop: `${this.props.margin}px`
    };
    return (
      <div className="introduction__text" style={Style}>
        {spans}
      </div>
    );
  }
}

export default IntroductionText;
