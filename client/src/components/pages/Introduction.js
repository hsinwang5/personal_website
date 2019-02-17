import React, { Component } from "react";
import classnames from "classnames";

import Nameplate from "../heroLayout/Nameplate";
import IntroductionText from "../introductionLayout/IntroductionText";
import IntroductionTextfield from "../introductionLayout/IntroductionTextfield";
import IntroductionCircle from "../introductionLayout/IntroductionCircle";
import IntroductionTransition from "../introductionLayout/IntroductionTransition";
import TextFieldSpecial from "../introductionLayout/TextFieldSpecial";
import Waypoint from "react-waypoint";

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waypointActivated: false
    };

    // this.onEnter = this.onEnter.bind(this);
    // this.onLeave = this.onLeave.bind(this);
  }

  // onLeave() {
  //   this.setState({
  //     waypointActivated: true
  //   });
  //   console.log(this.state.waypointActivated + " waypoint");
  // }

  // onEnter() {
  //   this.setState({
  //     waypointActivated: false
  //   });
  // }

  render() {
    return (
      <div className="introduction-main-container">
        <div
          className={classnames({
            introduction: true,
            "introduction--transition": this.props.introScrolled
          })}
        >
          <IntroductionText
            isClicked={this.props.isClicked}
            text={"Welcome! I'm"}
            delay={0.75}
            margin={0}
            introScrolled={this.props.introScrolled}
          />
          <div className="intro__nameplate--second">
            <Nameplate
              isClicked={this.props.isClicked}
              introScrolled={this.props.introScrolled}
            />
          </div>
          <IntroductionText
            isClicked={this.props.isClicked}
            text={"A web developer"}
            delay={1.2}
            margin={180}
            introScrolled={this.props.introScrolled}
          />
          <IntroductionTextfield
            isClicked={this.props.isClicked}
            text={"in Atlanta, Ga."}
            delay={1.5}
            margin={5}
            introScrolled={this.props.introScrolled}
          />
          <TextFieldSpecial
            isClicked={this.props.isClicked}
            delay={2}
            margin={10}
            waypointActivated={this.state.waypointActivated}
            introScrolled={this.props.introScrolled}
          />
          <IntroductionTextfield
            isClicked={this.props.isClicked}
            text={"HTML"}
            delay={2.3}
            margin={5}
            introScrolled={this.props.introScrolled}
          />
          <IntroductionTextfield
            isClicked={this.props.isClicked}
            text={"CSS3"}
            delay={2.4}
            margin={5}
            introScrolled={this.props.introScrolled}
          />
          <IntroductionText
            isClicked={this.props.isClicked}
            text={"Javascript"}
            delay={2.1}
            margin={5}
            introScrolled={this.props.introScrolled}
          />
          <IntroductionTextfield
            isClicked={this.props.isClicked}
            text={"React"}
            delay={2.6}
            margin={5}
            introScrolled={this.props.introScrolled}
          />
          <IntroductionText
            isClicked={this.props.isClicked}
            text={"Node.js"}
            delay={2.3}
            margin={5}
            introScrolled={this.props.introScrolled}
          />
          <IntroductionTextfield
            isClicked={this.props.isClicked}
            text={"Wordpress"}
            delay={2.8}
            margin={5}
            introScrolled={this.props.introScrolled}
          />
          {/* <Waypoint onEnter={this.onEnter} onLeave={this.onLeave}>
            <div className="introduction__waypoint" style={waypointStyle} />
          </Waypoint> */}
          {/* <IntroductionCircle top={7} aniRight={true} />
          <IntroductionCircle top={7} aniLeft={true} />
          <IntroductionCircle top={40} aniRight={true} />
          <IntroductionCircle top={40} aniLeft={true} />
          <IntroductionCircle top={73} aniRight={true} />
          <IntroductionCircle top={73} aniLeft={true} /> */}
        </div>
        <IntroductionCircle top={11} aniRight={true} />
        <IntroductionCircle top={11} aniLeft={true} />
        <IntroductionCircle top={34} aniRight={true} />
        <IntroductionCircle top={34} aniLeft={true} />
        <IntroductionCircle top={58} aniRight={true} />
        <IntroductionCircle top={58} aniLeft={true} />
        {/* <IntroductionTransition /> */}
      </div>
    );
  }
}

export default Introduction;
