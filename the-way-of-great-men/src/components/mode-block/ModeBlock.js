import React from "react";
import ModeButton from "../button/ModeButton";
import "./ModeBlock.css";

const ModeBlock = (props) => {
  return (
    <div className="modeBlockWrapper">
      <div className="imgContainer">
        <img src={props.image} alt="artist" />
      </div>
      <div className="modeButtons">
        <ModeButton />
        <ModeButton />
        <ModeButton />
      </div>
    </div>
  );
};

export default ModeBlock;
