import React from "react";
import { NavLink } from "react-router-dom";
import ModeBlock from "../components/mode-block/ModeBlock";
import SecondHeadline from "../components/second-headline/SecondHeadline";
import "./StartGame.css";
import Vincent_Van_Gogh_portrait_photo from "../assets/img/artists/Vincent_Van_Gogh_portrait_photo.jpg";

const StartGame = () => {
  return (
    <div>
      <SecondHeadline secondHeadline="VINCENT VAN GOGH" />
      <ModeBlock image={Vincent_Van_Gogh_portrait_photo} />
      <div className="links">
        <NavLink to="/play">
          <p className="link-start">PLAY</p>
        </NavLink>
        <NavLink to="/menu">
          <p className="link-start">BACK TO MENU</p>
        </NavLink>
      </div>
    </div>
  );
};

export default StartGame;
