import React, {useEffect, useState} from "react";


const Map = () => {

  useEffect(() => {
    getWeatherMap();
  }, []);
  
  const [map, setMap] = useState({});
  const REACT_APP_API_KEY = "89e4bc1fe6d1e59b2d9cad9147c51e5e";


  const getWeatherMap = async () => {
    const response = await fetch(
      `https://tile.openweathermap.org/map/temp_new/1/0/1.png?appid=${REACT_APP_API_KEY}`
    );

    const imageBlob = await response.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setMap(imageObjectURL);
  };

  

  return(
    <div>
      <link rel="stylesheet"  href="//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.2/leaflet.css"/>
      Map
      <div>
        <img src={map} style={{width:"340px",height:"620px"}} ></img>
      </div>
    </div>
  );
};
export default Map;