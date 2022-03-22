import React, {useEffect, useState} from "react";
const dict = [];
const AppContext = React.createContext()

class AppProvider extends React.Component {
    render() {
        return(
        <AppContext.Provider>
            {this.props.children}
        </AppContext.Provider>)
    }
}

const Map = () => {
    const [location, setNewLocation] = useState("")
    
    const getValues = async () =>{
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

  return(
    <div>
      Add New places to see 
      <div>
          <input plceholder="Add new place" onChange={(event) => setNewLocation(event.target.value)}/>
          <button onClick={getValues}>Add</button>
      </div>
    </div>
  );
};
export default Map;