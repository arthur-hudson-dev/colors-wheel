import React, { useState, useEffect } from "react";
import ColorShowcase from "../ColorShowCase/ColorShowcase";
import ColorInput from "../ColorInput/ColorInput";
import "./MainSection.scss";

export default function MainSection(props) {
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);
  let RHex = R.toString(16);
  let GHex = G.toString(16);
  let BHex = B.toString(16);

  if (RHex.length <= 1) {
    RHex = "0" + RHex;
  }
  if (GHex.length <= 1) {
    GHex = "0" + GHex;
  }
  if (BHex.length <= 1) {
    BHex = "0" + BHex;
  }

  const [hexColor, setHexColor] = useState(RHex + GHex + BHex);
  const [rgbColor, setRGBColor] = useState(R + ", " + G + ", " + B);
  const [hslColor, setHSLColor] = useState("");

  const getHexColor = (color) => {
    setHexColor(color);
  };

  const getRGBColor = (color) => {
    setRGBColor(color);
  };

  const getHSLColor = (color) => {
    setHSLColor(color);
  };

  /* useEffect(() => console.log(hexColor), [hexColor]); */
  /* useEffect(() => console.log(rgbColor), [rgbColor]); */
  console.log("Main Section: " + rgbColor + "/ " + hexColor);

  return (
    <section className="MainSection">
      <ColorInput
        getHexColor={getHexColor}
        getRGBColor={getRGBColor}
        getHSLColor={getHSLColor}
      />
      <ColorShowcase
        backgroundColor={"#" + hexColor}
        rgbColor={rgbColor}
        hslColor={hslColor}
      />
    </section>
  );
}
