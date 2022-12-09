import React, { useState } from "react";
import Select from "react-select";

const Color = () => {
  const [bgColor, setBgColor] = useState("grey");

  let bgHandler = (e) => {
    // console.log(e.label);
    setBgColor(e.label);
  };

  const options = [
    { value: 1, label: "blue" },
    { value: 2, label: "pink" },
    { value: 3, label: "red" },
    { value: 4, label: "yellow" },
    { value: 5, label: "purple" },
  ];
  console.log(bgColor);
  return (
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
      <Select options={options} onChange={bgHandler} />
    </div>
  );
};

export default Color;
