import React, { useEffect, useState } from "react";
const dict = [];
const locationsArr = [];

const Map = () => {
  const [location, setNewLocation] = useState("");
  const [newLoc, setNew] = useState([]);

  const getValues = async () => {

    // checking if input is empty
    if (location !== "") {
      // checking if location already entered
      if (locationsArr.includes(location)) {
        alert("Location already added");
      } else {
        locationsArr.push(location);
        setNew([...newLoc, location]);
        var requestOptions = {
          method: "GET",
        };
        // getting geolocation from location entered
        const latLon = await fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=a0c95706c69643f3980ee1bc068b2d3f`,
          requestOptions
        )
          .then((response) => response.json())
          .then((response) => {
            // adding location and Lat Lon to dictionary
            dict.push({
              key: location,
              value: [
                response["features"][0]["bbox"][0],
                response["features"][0]["bbox"][1],
              ],
            });
          })
          .catch((err) => console.log(err));
          // setting local storage to access dictionary from other files
        localStorage.setItem("list-locations", JSON.stringify(dict));
      }
    } else {
      alert("Enter a valid location");
    }
  };
  return (
    <div className="add-conatiner">
      <p className="Add-new-place">Add New places to see </p>
      <div>
        <input
          className="add-input"
          plceholder="Add new place"
          onChange={(event) => {
            setNewLocation(event.target.value);
          }}
        />
        <button className="add-button" onClick={getValues}>
          Add
        </button>
        <p>Currently added:</p>
        {/* mapping the locations to show the added locations to the user */}
        {newLoc.map((location_x) => {
          return <div key={location_x}>{location_x}</div>;
        })}
      </div>
    </div>
  );
};
export default Map;
