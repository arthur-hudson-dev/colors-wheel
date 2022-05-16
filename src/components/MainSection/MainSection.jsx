import React, { useState, useEffect } from "react";
import ColorShowcase from "../ColorShowCase/ColorShowcase";
import ColorInput from "../ColorInput/ColorInput";
import "./MainSection.scss";

export default function MainSection(props) {
  const [colorInput, setColorInput] = useState("");

  const getColor = (color) => {
    setColorInput("#" + color);
  };

  useEffect(() => console.log(colorInput));

  return (
    <section className="MainSection">
      <ColorInput onChange={getColor} />
      <ColorShowcase backgroundColor={colorInput} />
    </section>
  );
}
