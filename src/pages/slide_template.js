import React from "react";

import TopBar from "../components/topBar";
import MiddleImage from "../components/Middle-Image";
import ConditionsBar from "../components/conditionsBar";
import BottomBar from "../components/BottomBar";

const Slide = () => {

  const result = localStorage.getItem('list-locations')
  const getDict = JSON.parse(result)
  console.log(getDict)
  return (
    <>
      <div className="appContainer">
        <div className="topContainerParent">
          <TopBar />
        </div>
        <div className="middleContainerParent">
          <MiddleImage />
        </div>
        <div className="conditionsContainerParent">
          <ConditionsBar />
        </div>
        <div className="bottomContainerParent">
          <BottomBar />
        </div>
      </div>
    </>
  );
};

export default Slide;
