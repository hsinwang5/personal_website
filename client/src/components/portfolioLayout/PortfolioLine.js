import React, { Component } from "react";

class PortfolioLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 1,
      top: 0
    };

    this.myRef = React.createRef();
  }

  componentDidMount() {
    const nodeHeight = this.myRef.current.offsetWidth;
    console.log("width: " + nodeHeight);
    this.setState(
      {
        height: Math.round(nodeHeight * 2.115)
      },
      () => {
        const newTop =
          this.state.height * this.props.place - this.props.place * 5;
        this.setState({
          top: newTop
        });
      }
    );
  }

  render() {
    let Style;
    //calculate where to place the portfolio circle along vertical axis
    //Set direction of circle + other properties in portfolio page
    if (this.props.direction === "left") {
      Style = {
        top: this.state.top,
        borderTopLeftRadius: "1000px",
        borderBottomLeftRadius: "1000px",
        borderRight: "0",
        height: `${this.state.height}px`,
        left: `-16%`,
        width: `${this.props.width}px`
      };
    } else {
      Style = {
        top: this.state.top,
        borderTopRightRadius: "1000px",
        borderBottomRightRadius: "1000px",
        borderLeft: "0",
        height: `${this.state.height}px`,
        right: `-16%`,
        width: `${this.props.width}px`
      };
    }
    return (
      <div
        className="portfolio-line__circle portfolio-line__circle--circle1"
        style={Style}
        ref={this.myRef}
      />
    );
  }
}

export default PortfolioLine;
