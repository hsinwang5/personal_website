import React, { Component } from "react";
import classnames from "classnames";

class TextFieldPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Style2 = {
      transitionDelay: this.props.introScrolled
        ? `none`
        : `${this.props.delay}s`
    };
    let text = this.props.introScrolled ? "Portfolio" : "portfolio";
    return (
      <div
        className={classnames("introduction__char3", {
          "introduction__char--transition2":
            this.props.isClicked && !this.props.introScrolled,
          animation__text: this.props.introScrolled
        })}
        // style={Style2}
      >
        {text}
      </div>
    );
  }
}

export default TextFieldPortfolio;
