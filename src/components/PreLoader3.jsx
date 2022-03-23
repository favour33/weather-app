import React, { useEffect, useState } from "react";
import "../css/PreLoader3.css";
import loadingscreen from "./LoadingScreen.JPG";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import Settings from "../pages/Settings";
import Updates from "../pages/Updates";
import Maps from "../pages/Map";
import Add from "../pages/Add";
import "../css/index.css";

function PreLoader3() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    setData(json);
                    setloading(true);

                    setTimeout(() => {
                        setcompleted(true);
                    }, 1000);
                });
        }, 2000);
    }, []);

    return ( 
        <> 
         {!completed ? ( 
            <> 
              {!loading ? ( 
                <div className = "title" >
                    <h1> Welcome To AgriWeather </h1> 
                    <img src = { loadingscreen }/> 
                    <div className = "spinner">
                        <span> Loading... </span> 
                    </div> 
                </div>
               ) : ( 
                 <div className = "completed" > </div>
                )}
            </>
            ) : ( 
            <>
             <div className="appContainer">
                 <div className="appContainer_nav">
            <Router>
        <div className="navid">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/Map" element={<Maps/>}/>
          <Route path="/Add" element={<Add/>}/>
        </Routes>
      </Router>
    </div>
    </div>
            </>
            )}
        </>
    );
}

export default PreLoader3;