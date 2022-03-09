import React from "react";
import feelsLikePic from "../pic/feelsLike.PNG";
import windPic from "../pic/windy.PNG";
import humidityPic from "../pic/partRain.PNG";

const ConditionsBar = () => {
  return (
    <div class="conditionsBarContainer">
      <div className="condition">
        <p className="condition-name">Feels Like</p>
        <img id="thermometerIcon" src={feelsLikePic} alt="Themostat" />
        <p className="degree">3°</p>
      </div>
      {/*  */}
      <div className="condition">
        <p className="condition-name">Wind</p>
        <img id="windyIcon" src={windPic} alt="windy" />
        <p className="degree">4.1 mph</p>
        {/*  */}
      </div>
      {/*  */}
      <div className="condition">
        <p className="condition-name">Humidity</p>
        <img id="humidityIcon" src={humidityPic} alt="humidity" />
        <p className="degree">87%</p>
        {/*  */}
      </div>

      {/* <div id="condition1">
        Feels Like
        <div id="thermostatImgContainer">
          <img id="thermometerIcon" src={feelsLikePic} alt="icon" />
        </div>
        <div id="conditionsImgPic1" class="conditionsImgPic">
          3°
        </div>
      </div> */}

      {/* <div id="condition2">
        Wind
        <div id="windyImgContainer">
          <img id="windyIcon" src={windPic} alt="windy" />
        </div>
        <div id="conditionsImgPic2" class="conditionsImgPic">
          4.1 mph
        </div>
      </div> */}
      {/* <div id="condition3">
        Humidity
        <div id="humidityImgContainer">
          <img id="humidityIcon" src={humidityPic} alt="humidity" />
        </div>
        <div id="conditionsImgPic3" class="conditionsImgPic">
          87%
        </div>
      </div> */}
    </div>
  );
};
export default ConditionsBar;
