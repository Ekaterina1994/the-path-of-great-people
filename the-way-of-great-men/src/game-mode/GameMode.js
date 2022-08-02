import React from "react";
import { NavLink } from "react-router-dom";
import ModeBlock from "../components/mode-block/ModeBlock";
import SecondHeadline from "../components/second-headline/SecondHeadline";
import "./GameMode.css";
import Van_Gogh from "../assets/img/background/van-gogh-last-work.jpg";

const GameMode = () => {
  return (
    <div>
      <SecondHeadline secondHeadline="GREAT PAINTER" />
      <ModeBlock image={Van_Gogh} />
      <div className="links">
        <NavLink to="/play">
          <p className="link-start">APPLY</p>
        </NavLink>
        <NavLink to="/menu">
          <p className="link-start">BACK TO MENU</p>
        </NavLink>
      </div>
    </div>
  );
};

export default GameMode;
