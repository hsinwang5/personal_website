import React, { Component } from "react";

import Nameplate from "../heroLayout/Nameplate";
import IntroductionText from "../introductionLayout/IntroductionText";

class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <IntroductionText
          isClicked={this.props.isClicked}
          text={"Hi, my name is"}
        />
        <div className="intro__nameplate--second">
          <Nameplate />
        </div>
        <IntroductionText
          isClicked={this.props.isClicked}
          text={
            "I specialize in front-end programming, with a particular focus on React, javascript, and Css."
          }
        />
        <div className="introduction__text introduction__text--text2" />
      </div>
    );
  }
}

export default Introduction;
