import React, { Component } from "react";
import classnames from "classnames";

class IntroductionTextfield extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Style = {
      paddingTop: `${this.props.margin}px`,
      display: "inline-block"
    };
    const Style2 = {
      transitionDelay: `${this.props.delay}s`
    };
    return (
      <div className="introduction__text" style={Style}>
        <div
          className={classnames("introduction__char2", {
            "introduction__char--transition2": this.props.isClicked,
            animation__text: this.props.transition
          })}
          style={Style2}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default IntroductionTextfield;
