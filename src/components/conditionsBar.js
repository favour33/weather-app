import React from "react";
import feelsLikePic from '../pic/feelsLike.PNG'
import windPic from '../pic/windy.PNG'
import humidityPic from '../pic/partRain.PNG'


const ConditionsBar = () => {
    return (
        <div class="conditionsBarContainer">
            <div id="condition1">
                Feels Like
                <div id="thermostatImgContainer">
                    <img id="thermometerIcon" src={feelsLikePic} alt="icon" />
                </div>
                <div id="conditionsImgPic1" class="conditionsImgPic">3°</div>
            </div>
            <div id="condition2">
                Wind
                <div id="windyImgContainer">
                    <img id="windyIcon" src={windPic} alt="windy" />
                </div>
                <div id="conditionsImgPic2" class="conditionsImgPic">4.1 mph</div>
            </div>
            <div id="condition3">
                Humidity
                <div id="humidityImgContainer">
                    <img id="humidityIcon" src={humidityPic} alt="humidity" />
                </div>
                <div id="conditionsImgPic3" class="conditionsImgPic">87%</div>
            </div>
        </div >
    )
}
export default ConditionsBar