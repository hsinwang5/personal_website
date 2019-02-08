import React from "react";

function Nameplate(props) {
  return (
    <div
      className="intro__nameplate animation__growNameplate"
      onClick={props.enterWebsiteClick}
    >
      <div className="intro__nameplate--first">Shen</div>
      <div className="intro__nameplate--last">Wang</div>
    </div>
  );
}

export default Nameplate;
