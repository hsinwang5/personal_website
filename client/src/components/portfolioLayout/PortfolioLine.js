import React, { Component } from "react";

class PortfolioLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 1,
      top: 0,
      width: 0
    };

    this.myRef = React.createRef();
    this.calculateSize = this.calculateSize.bind(this);
  }

  componentDidMount() {
    this.calculateSize();
  }

  //dynamically calculates the size of portfolio circles, call on render and window resize
  calculateSize() {
    const width = Math.round(window.innerWidth * 0.3 * 0.69);
    this.setState(
      {
        width
      },
      () => {
        const height = Math.round(this.myRef.current.offsetWidth * 2.115);
        this.setState(
          {
            height
          },
          () => {
            //calculate the top offset, factoring in the size of the circle's border
            const top =
              this.state.height * this.props.place - this.props.place * 5;
            this.setState({
              top
            });
          }
        );
      }
    );
  }

  render() {
    console.log(this.state.width);
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
        width: `${this.state.width}px`
      };
    } else {
      Style = {
        top: this.state.top,
        borderTopRightRadius: "1000px",
        borderBottomRightRadius: "1000px",
        borderLeft: "0",
        height: `${this.state.height}px`,
        right: `-16%`,
        width: `${this.state.width}px`
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
