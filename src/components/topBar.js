import React from "react";
import menuImg from "../pic/sidebar2.png";
import Navbar from "./Navbar/Navbar";

const TopBar = () => {
  return (
    <div className="topContainer">
      <div id="conditions">Full Moon Night</div>
      <div id="location">
        London, UK
        <div id="temperature">4°</div>
      </div>
    </div>
  );
};

export default TopBar;
