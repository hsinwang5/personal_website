import React from "react";

function Triangle(props) {
  const style = {
    top: props.top
  };
  const animationStyle = {
    top: props.top,
    animationDelay: props.delay
  };
  const triangleBoxStyle = {
    opacity: props.opacity
  };
  return (
    <div className="triangle-box" style={triangleBoxStyle}>
      <div className="intro__triangle" style={style} />
      {animationStyle.animationDelay ? (
        <div
          className="intro__triangle animation__grow-triangle"
          style={animationStyle}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Triangle;
