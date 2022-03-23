import React, {useEffect, useState} from "react";
import AerisWeather from '@aerisweather/javascript-sdk';
import '@aerisweather/javascript-sdk/dist/styles/styles.css';

const Map = () => {

  useEffect(() => {
    const aeris = new AerisWeather('S7qAPDYfude8398481Psc', 'RXjWtivCWg69bT0WeuSBcaW2TS1rhewSpmQ3ltKJ');
      

        aeris.views().then((views) => {
            const map = new views.Map('#mapview', {
                map: {
                    layers: {
                        data: 'alerts,radar'
                    },
                    center: 'austin,tx',
                    zoom: 6,
                    size: {
                        width: 300,
                        height: 400
                    }
                }
            })
        });
  }, []);
  



 

  

  return(
    <div>
      Map
      <div id="mapview" style={{left:"0px"}}>
       
      </div>
    </div>
  );
};
export default Map;