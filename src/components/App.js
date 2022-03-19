// import TopBar from "./topBar";
// import MiddleImage from "./Middle-Image";
// import ConditionsBar from "./conditionsBar";
// import BottomBar from "./BottomBar";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import Settings from "../pages/Settings";
import Updates from "../pages/Updates";

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
        </Routes>
      </Router>
      {/* 
      <div className="topContainerParent">
        <TopBar />
      </div>
      <div className="middleContainerParent">
        <MiddleImage />
      </div>
      <div className="conditionsContainerParent">
        <ConditionsBar />
      </div>
      <div className="bottomContainerParent">
        <BottomBar />
      </div> */}
    </div>
  );
}

export default App;
