import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./settings/components/globalStyles";
import { lightTheme, darkTheme } from "./settings/components/Theme";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Title from "./settings/components/Title";
import Display from "./settings/display";
import padding from "./settings/components/padding";

import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import "../css/index.css";


import ControlledRadioButtonsGroup from "./settings/components/ChangeUnits";

//Buttons for temp
const change = <ControlledRadioButtonsGroup />;

const App = () => {
  // array with settings displays
  const settingOptions = [
    {
      header: {
        name: "Display",
      },

      values: [
        {
          name: "Temperature",
          description:
            "Change display of temperature throughout the application.",
          field: change,
        },
      ],
    },

    {
      header: {
        name: "Notifications",
      },
      values: [
        {
          name: "Notification settings",
          description: "Enable notifications.",
        },
      ],
    },

    {
      header: {
        name: "Support",
      },
      values: [
        {
          name: "Submit request",
          description:
            "Submit a support ticket to one of our customer service members.",
        },
      ],
    },
  ];

  // Change dark mode
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [visibleOptions, setVisibleOptions] = useState(settingOptions);

  //main layout
  return (
    <>
      <div className="appContainer">
        <div className="App">
        <div className="container my-5" id="scrollContainerSettings">
          
          <SettingsIcon fontSize="large"/>
          <Title/>
          <Display/>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <>
          <GlobalStyles/>
          <div className="App">
            
            <FormControlLabel control={<Switch  onClick={themeToggler} />} label={<h3>Dark Mode</h3>} />
          
          
          <div>
            {visibleOptions.map(option =><div key={option.header.name} className="mt-5 mt-2">
              <h3>{option.header.name}</h3>
              <div style={{borderRadius: "10px", border: "1px solid rgba(0, 0, 0, 0.25)", ...padding(5,5,5,5)}}>
                {option.values.map((values)=> (
                  <div key={values.name}>

                    <ul style={{listStyleType: "none"}} className="list-group">
                      <li className="list-group-tem mb-2">
                        <h6 className="font-weight-bold">{values.name}</h6>
                      
                        <p>{values.description}</p>
                      <p>{values.field}</p>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
          </div>)}
          </div>
          </div>
          
          
          </>
          <div style={{...padding(5,5,5,5)}}><Button variant="contained">Save Changes</Button></div>
        </ThemeProvider>
        </div>
        
        </div>
      </div>
    </>

  );
};
export default App;
