import React from "react";
import earth from "./earth.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faEarthEurope} />

      <p className="nav-title">Travel Journal</p>
    </div>
  );
}

export default Navbar;
