import React from "react";
import { NavLink } from "react-router-dom";
import "./PersonDescription.css";

const PersonDescription = () => {
  return (
    <div>
      <div className="cvWrapper">
        <div className="imgContainer">
          <img
            className="imgPhoto"
            src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
            alt="logo"
          />
        </div>
        <div className="miniDescription">
          <p>Mini Description (Contacts, mini-CV)</p>
        </div>
      </div>
      <NavLink to="/info">
        <p className="link">BACK TO INFO</p>
      </NavLink>
    </div>
  );
};

export default PersonDescription;
