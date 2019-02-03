import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="triangles">
          <div className="triangles__tri1">
            <div className="triangles__tri2" />
          </div>
        </div>
        <div className="nameplate">Shen Wang</div>
      </div>
    );
  }
}

export default Hero;
