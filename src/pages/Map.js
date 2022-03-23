import React, { useEffect, useState } from "react";
import AerisWeather from "@aerisweather/javascript-sdk";
import "@aerisweather/javascript-sdk/dist/styles/styles.css";

const Map = () => {
  useEffect(() => {
    const aeris = new AerisWeather(
      "S7qAPDYfude8398481Psc",
      "RXjWtivCWg69bT0WeuSBcaW2TS1rhewSpmQ3ltKJ"
    );

    aeris.views().then((views) => {
      const map = new views.Map("#mapview", {
        map: {
          layers: {
            data: "alerts,radar",
          },
          center: "austin,tx",
          zoom: 5,
          size: {
            width: 250,
            height: 300,
          },
        },
      });
    });
  }, []);

  return (
    <div className="map-name">
      <h1 className="ch">Map and Long Term Weather</h1>
      <div id="mapview" style={{ width: "300px" }}></div>
    </div>
  );
};
export default Map;
