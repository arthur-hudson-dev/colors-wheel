import React, { useState } from "react";
import ColorShowcase from "../ColorShowCase/ColorShowcase";
import ColorInput from "../ColorInput/ColorInput";
import "./MainSection.scss";

export default function MainSection(props) {
  const [colorInput, setColorInput] = useState("#000000");

  return (
    <section className="MainSection">
      <ColorInput />
      <ColorShowcase backgroundColor={colorInput} />
    </section>
  );
}
