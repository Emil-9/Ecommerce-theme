import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./RangeSlider.css";
function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  const { max, min, onPriceChange, title, titleStyle } = props;
  const [value, setValue] = React.useState<number[]>([0, 1000]);

  const handleChange = (event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    onPriceChange(event?.target.value);
  };

  return (
    <Box sx={{ width: 220 }}>
      <p style={titleStyle}>{title}</p>
      <Slider
        getAriaLabel={() => "Price"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={max}
        className={"range-slider-custom"}
        min={min}
      />
      <div className={"marks-container"}>
        <p>range</p>
        <span className={"marks-value"}>
          ${min} - ${max}
        </span>
      </div>
    </Box>
  );
}
