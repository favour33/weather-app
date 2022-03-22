import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import Settings from "../pages/Settings";
import Updates from "../pages/Updates";
import Maps from "../pages/Map";
import Add from "../pages/Add"

function App() {
  return (
    <div className="appContainer_nav">
      <Router>
        <div className="navid">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/Map" element={<Maps />} />
          <Route path="/Add" element={< Add/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
