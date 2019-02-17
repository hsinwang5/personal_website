import React, { Component } from "react";
import classnames from "classnames";

class TextFieldPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Style2 = {
      transitionDelay: this.props.waypointActivated
        ? `none`
        : `${this.props.delay}s`
    };
    console.log(Style2.transitionDelay);
    return (
      <div
        className={classnames("introduction__char3", {
          "introduction__char--transition2": this.props.isClicked,
          animation__text: this.props.waypointActivated
        })}
        // style={Style2}
      >
        portfolio
      </div>
    );
  }
}

export default TextFieldPortfolio;
