import React, { Component } from "react";

class PortfolioLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 1
    };

    this.myRef = React.createRef();
  }

  componentDidMount() {
    const nodeHeight = this.myRef.current.offsetWidth;
    this.setState({
      height: nodeHeight * 2.115
    });
    console.log(nodeHeight);
  }

  render() {
    let Style;
    //Set direction of circle + other properties in portfolio page
    if (this.props.direction === "left") {
      Style = {
        top: `${this.props.top}px`,
        borderTopLeftRadius: "1000px",
        borderBottomLeftRadius: "1000px",
        borderRight: "0",
        height: `${this.state.height}px`
      };
    } else {
      Style = {
        top: `${this.props.top}px`,
        borderTopRightRadius: "1000px",
        borderBottomRightRadius: "1000px",
        borderLeft: "0",
        height: `${this.state.height}px`
      };
    }
    console.log(this.state.height);
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
