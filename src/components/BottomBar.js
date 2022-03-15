import React, { useEffect } from "react";
import addButton from "../pic/addButton.PNG";
import locationButton from "../pic/location.PNG";
import calanderButton from "../pic/calander.PNG";

const BottomBar = () => {
  return (
    <div className="bottomBarContainer">
      <div id="image1">
        <img id="addButton" src={addButton} alt="addButton" />
      </div>
      <div id="image2">
        <img id="locationButton" src={locationButton} alt="calanderButton" />
      </div>
      <div id="image3">
        <img id="calanderButton" src={calanderButton} alt="calanderButton" />
      </div>
    </div>
  );
};

export default BottomBar;
