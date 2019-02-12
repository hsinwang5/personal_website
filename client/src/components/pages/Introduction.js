import React, { Component } from "react";

import Nameplate from "../heroLayout/Nameplate";
import IntroductionText from "../introductionLayout/IntroductionText";
import IntroductionTextfield from "../introductionLayout/IntroductionTextfield";

class Introduction extends Component {
  render() {
    return (
      <div className="introduction-main-container">
        <div className="introduction">
          <IntroductionText
            isClicked={this.props.isClicked}
            text={"Welcome! I'm"}
            delay={0.75}
            margin={0}
          />
          <div className="intro__nameplate--second">
            <Nameplate isClicked={this.props.isClicked} />
          </div>
          <IntroductionText
            isClicked={this.props.isClicked}
            text={"A web developer"}
            delay={1.2}
            margin={180}
          />
          <IntroductionTextfield
            isClicked={this.props.isClicked}
            text={"focused on front and back-end programming."}
            delay={1.5}
            margin={5}
          />
          <IntroductionTextfield
            isClicked={this.props.isClicked}
            text={"My projects have focused on:"}
            delay={2}
            margin={10}
          />
          <IntroductionTextfield
            isClicked={this.props.isClicked}
            text={"HTML"}
            delay={3}
            margin={5}
          />
          <IntroductionTextfield
            isClicked={this.props.isClicked}
            text={"CSS3"}
            delay={3.1}
            margin={5}
          />
          <IntroductionText
            isClicked={this.props.isClicked}
            text={"Javascript"}
            delay={2.8}
            margin={5}
          />
          <IntroductionTextfield
            isClicked={this.props.isClicked}
            text={"React"}
            delay={3.3}
            margin={5}
          />
          <IntroductionText
            isClicked={this.props.isClicked}
            text={"Node.js"}
            delay={3}
            margin={5}
          />
          <IntroductionTextfield
            isClicked={this.props.isClicked}
            text={"Wordpress"}
            delay={3.5}
            margin={5}
          />
          <div className="introduction__portfolio-line">
            {/* <PortfolioLine /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
