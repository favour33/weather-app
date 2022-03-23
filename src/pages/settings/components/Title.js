// src/Title.js

import React from "react";
import padding from "./padding";

function Title() {
  return (
    <div style={{ diplay: "flex", ...padding(10, 10, 10, 10) }}>
      <h1>Settings</h1>
    </div>
  );
}

export default Title;
