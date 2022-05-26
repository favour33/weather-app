import React from "react";
import menuImg from "../pic/sidebar2.png";
import Navbar from "./Navbar/Navbar";
import { useEffect, useState } from "react";

const TopBar = (props) => {
  const Location = props.Location;
  const Lat = props.LatLon[0];
  const Lon = props.LatLon[1];
  useEffect(() => {
    getWeatherInfo();
  }, []);

  const [weathers, setWeathers] = useState({});

  // aysnc function to fetch data
  const getWeatherInfo = async () => {
    // fetch response from openweather url
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${Lon}&lon=${Lat}&appid=${process.env.REACT_APP_API_KEY}`
    );
    // convert response in JSON format
    const data = await response.json();
    // log the data out for now

    // update the set to hold the JSON object
    setWeathers(data);
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
