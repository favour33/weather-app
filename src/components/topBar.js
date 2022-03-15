import React from "react";
import menuImg from "../pic/sidebar2.png";

const TopBar = () => {
  return (
    <div className="topContainer">
      <div id="conditions">Full Moon Night</div>
      <div id="location">
        London, UK
        <div id="temperature">4°</div>
      </div>
      {/* <div id="menuImg">
        <img
          id="menueImage"
          src={menuImg}
          alt="MenuIcon"
          onClick={() => {
            alert("Hello world");
          }}
        />
      </div> */}
    </div>
  );
};

export default TopBar;
