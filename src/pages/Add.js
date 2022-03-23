import React, {useEffect, useState} from "react";
const dict = [];
const locationsArr =[];


const Map = () => {
    const [location, setNewLocation] = useState("")
    const [newLoc, setNew] = useState([])

    const getValues = async () =>{
      if(location !== ""){
        if(locationsArr.includes(location)){
          alert('Location already added')
        }else{
          locationsArr.push(location)
          setNew([...newLoc,location])
          var requestOptions = {
            method: "GET",
        }
        const latLon = await fetch(
            `https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=a0c95706c69643f3980ee1bc068b2d3f`,requestOptions 
          ).then(response => response.json())
          .then(response => {
                dict.push({
                  key:location,
                  value:
                  [response['features'][0]['bbox'][0],response['features'][0]['bbox'][1]]})
                })
          .catch(err => console.log(err))
          localStorage.setItem("list-locations",JSON.stringify(dict))
        }
      }else{
        alert('Enter a valid location')
      }
    }
  return(
    <div>
      Add New places to see 
      <div>
          <input plceholder="Add new place" onChange={(event) => {setNewLocation(event.target.value)}}/>
          <button onClick={getValues}>Add</button>
          <h3>Currently added:</h3>
          {
            newLoc.map((location_x)=>{
              return(
                <div key={location_x}>
                  {location_x}
                </div>
              )
            })
          }
      </div>
    </div>
  );
};
export default Map;