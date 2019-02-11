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
        style={{ transitionDelay: `${index * 0.05 + 2}s` }}
        className={classnames("introduction__char", {
          "introduction__char--transition": this.props.isClicked
        })}
      >
        {char}
      </span>
    ));
    console.log(this.props.isClicked);
    return <div className="introduction__text">{spans}</div>;
  }
}

export default IntroductionText;
