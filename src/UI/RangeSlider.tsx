import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider(props: {
  onPriceChange: (arg0: any) => void;
  max: number;
  min: number;
}) {
  const [value, setValue] = React.useState<number[]>([props.min, props.max]);

  const handleChange = (event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    props.onPriceChange(event?.target.value);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={props.max}
        min={props.min}
      />
    </Box>
  );
}
