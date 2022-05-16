import React, { useState, useEffect } from "react";
import ColorShowcase from "../ColorShowCase/ColorShowcase";
import ColorInput from "../ColorInput/ColorInput";
import "./MainSection.scss";

export default function MainSection(props) {
  const R = Math.floor(Math.random() * 255).toString(16);
  const G = Math.floor(Math.random() * 255).toString(16);
  const B = Math.floor(Math.random() * 255).toString(16);
  const [colorInput, setColorInput] = useState(R + G + B);

  const getColor = (color) => {
    setColorInput(color);
  };

  useEffect(() => console.log(colorInput), [colorInput]);

  return (
    <section className="MainSection">
      <ColorInput onChange={getColor} />
      <ColorShowcase backgroundColor={"#" + colorInput} />
    </section>
  );
}
