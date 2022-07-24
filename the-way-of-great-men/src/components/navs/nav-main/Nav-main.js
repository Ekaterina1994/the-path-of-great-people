import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav-main.css";

const NavMain = () => {
  return (
    <div>
      <ul className="nav-main__menu">
        <NavLink to="/start-game">
          <li>START GAME</li>
        </NavLink>
        <NavLink to="/game-mode">
          <li>GAME MODE</li>
        </NavLink>
        <NavLink to="/options">
          <li>OPTIONS</li>
        </NavLink>
        <NavLink to="/info">
          <li>INFO</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavMain;
