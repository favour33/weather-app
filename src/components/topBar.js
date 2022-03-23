import React from "react";
import menuImg from "../pic/sidebar2.png";
import Navbar from "./Navbar/Navbar";
import { useEffect, useState } from "react";

const TopBar = (props) => {
  const Location = props.Location
  const Lat = props.LatLon[0]
  const Lon = props.LatLon[1]
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
      `https://api.openweathermap.org/data/2.5/weather?lat=${Lon}&lon=${Lat}&appid=${REACT_APP_API_KEY}`
    );
    // convert response in JSON format
    const data = await response.json();
    // log the data out for now

    // update the set to hold the JSON object
    setWeathers(data);
    // console.log(weathers);
    // console.log(weathers.main.temp);
  };

  return (
    <div className="topContainer">
      <div className="first">
        <div id="conditions">Full Moon Night</div>
        <div id="location">{Location}</div>
      </div>
      <div className="second">
        {typeof weathers.main != "undefined" ? (
          <div id="temperature">
            {weathers && Math.round(weathers.main.temp - 273.15)}°
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TopBar;
