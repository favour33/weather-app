import React, { useEffect, useState } from "react";
import feelsLikePic from "../pic/feelsLike.PNG";
import windPic from "../pic/windy.PNG";
import humidityPic from "../pic/partRain.PNG";

const ConditionsBar = () => {
  // // check local storage
  // const check = localStorage.getItem("weathers");

  // if (check) {
  //   setWeathers(JSON.parse(check));
  // } else {
  //   // lon and lat of london
  //   const lon = 51.507351;
  //   const lat = -0.127758;
  //   // fetch response from openweather url
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
  //   );
  //   // convert response in JSON format
  //   const data = await response.json();
  //   // log the data out for now
  //   localStorage.setItem("weathers", JSON.stringify(data));

  //   // update the set to hold the JSON object
  //   setWeathers(data);
  //   console.log(weathers.main.temp);
  //   console.log(data);
  // }

  // useeffect hook to load the data whenever our page mounts
  useEffect(() => {
    getWeatherInfo();
  }, []);

  const [weathers, setWeathers] = useState({});
  const REACT_APP_API_KEY = "89e4bc1fe6d1e59b2d9cad9147c51e5e";

  // aysnc function to fetch data
  const getWeatherInfo = async () => {
    // lon and lat of london
    // const lon = 51.507351;
    // const lat = -0.127758;
    // fetch response from openweather url
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=-0.127758&lon=51.507351&appid=${REACT_APP_API_KEY}`
    );
    // convert response in JSON format
    const data = await response.json();
    // log the data out for now

    // update the set to hold the JSON object
    setWeathers(data);
    console.log(data);
  };

  return (
    <>
      {typeof weathers.main != "undefined" ? (
        <div>
          <div className="conditionsBarContainer">
            <div className="condition">
              <p className="condition-name">Feels Like</p>
              <img id="thermometerIcon" src={feelsLikePic} alt="Themostat" />
              <p className="degree">{weathers && weathers.main.temp}</p>
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
