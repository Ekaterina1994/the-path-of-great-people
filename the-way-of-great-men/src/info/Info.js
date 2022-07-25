import React from "react";
import { NavLink } from "react-router-dom";
import alexei_marusov from "./../assets/img/developers-photos/alexei_marusov.jpg";
import "./Info.css";

const Info = () => {
  return (
    <div>
      <NavLink to="/person-description">
        <div className="cvWrapper-info">
          <div className="imgContainer-info">
            <img className="imgPhoto-info" src={alexei_marusov} alt="logo" />
            <div className="overlay-info">Alexei Marusov</div>
          </div>
          <div className="imgContainer-info">
            <img
              className="imgPhoto-info"
              src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
              alt="logo"
            />
            <div className="overlay-info">Ekaterina Veretennikova</div>
          </div>
          <div className="imgContainer-info">
            <img
              className="imgPhoto-info"
              src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
              alt="logo"
            />
            <div className="overlay-info">Maxim Hasanau</div>
          </div>
        </div>
      </NavLink>
      <ul className="nav-main__menu">
        <NavLink to="/about-game">
          <li>ABOUT GAME</li>
        </NavLink>
        <NavLink to="/menu">
          <li>BACK TO MENU</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Info;
