import React, { useEffect, useState } from "react";
import feelsLikePic from "../pic/feelsLike.PNG";
import windPic from "../pic/windy.PNG";
import humidityPic from "../pic/partRain.PNG";

const ConditionsBar = (props) => {
  const lat = props.LatLon[0];
  const lon = props.LatLon[1];

  useEffect(() => {
    getWeatherInfo();
  }, []);

  const [weathers, setWeathers] = useState({});

  // aysnc function to fetch data
  const getWeatherInfo = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=${process.env.REACT_APP_API_KEY}`
    );
    // convert response in JSON format
    const data = await response.json();
    // log the data out for now

    // update the set to hold the JSON object
    setWeathers(data);
    console.log(data.main.temp);
  };

  return (
    <>
      {typeof weathers.main != "undefined" ? (
        <div>
          <div className="conditionsBarContainer">
            <div className="condition">
              <p className="condition-name">Feels Like</p>
              <img id="thermometerIcon" src={feelsLikePic} alt="Themostat" />
              <p className="degree">
                {weathers && Math.round(weathers.main.temp - 273.15)}°
              </p>
            </div>
            {/*  */}
            <div className="condition">
              <p className="condition-name">Wind</p>
              <img id="windyIcon" src={windPic} alt="windy" />
              <p className="degree">{weathers && weathers.wind.speed} mph</p>
              {/*  */}
            </div>
            {/*  */}
            <div className="condition">
              <p className="condition-name">Humidity</p>
              <img id="humidityIcon" src={humidityPic} alt="humidity" />
              <p className="degree">{weathers && weathers.main.humidity} %</p>
              {/*  */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ConditionsBar;
