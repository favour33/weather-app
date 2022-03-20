import React from "react";
import TopBar from "../components/TopBar";
import MiddleImage from "../components/Middle-Image";
import ConditionsBar from "../components/conditionsBar";
import BottomBar from "../components/BottomBar";

const Home = () => {
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

export default Home;
