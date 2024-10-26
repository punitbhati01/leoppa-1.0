import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {
  const [weight, setWeight] = React.useState('');

  const handleChange = (event) => {
    setWeight(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 150,  minHeight: 50}}>
        <InputLabel id="demo-simple-select-autowidth-label">Weight</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={weight}
          onChange={handleChange}
          autoWidth
          label="Weight"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={250}>250 g</MenuItem>
          <MenuItem value={500}>500 g</MenuItem>
          <MenuItem value={1000}>1 kg</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}