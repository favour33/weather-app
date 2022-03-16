import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FormControlLabel from '@mui/material/FormControlLabel';

export default function ControlledRadioButtonsGroup() {
    const [value, setValue] = React.useState('Celcius');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="Celsius " control={<Radio />} label="Celsius " />
          <FormControlLabel value="Fahrenheit" control={<Radio />} label="Fahrenheit" />
        </RadioGroup>
      </FormControl>
    );
  }