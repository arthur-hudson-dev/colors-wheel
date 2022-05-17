import React, { useState, useEffect } from "react";
import InputField from "../InputField/InputField";
import "./ColorInput.scss";

export default function ColorInput(props) {
  const getHexColor = props.getHexColor;
  const getRGBColor = props.getRGBColor;
  const getHSLColor = props.getHSLColor;
  const [rColor, setRColor] = useState(0);
  const [gColor, setGColor] = useState(0);
  const [bColor, setBColor] = useState(0);
  const [hColor, setHColor] = useState(0);
  const [sColor, setSColor] = useState(0);
  const [lColor, setLColor] = useState(0);

  const getRColor = (color) => {
    setRColor(color);
    getRGBColor(rColor + ", " + gColor + ", " + bColor);
  };

  const getGColor = (color) => {
    setGColor(color);
    getRGBColor(rColor + ", " + gColor + ", " + bColor);
  };

  const getBColor = (color) => {
    setBColor(color);
    getRGBColor(rColor + ", " + gColor + ", " + bColor);
  };

  const getHColor = (color) => {
    setHColor(color);
    getHSLColor(hColor + ", " + sColor + ", " + lColor);
  };

  const getSColor = (color) => {
    setLColor(color);
    getHSLColor(hColor + ", " + sColor + ", " + lColor);
  };

  const getLColor = (color) => {
    setSColor(color);
    getHSLColor(hColor + ", " + sColor + ", " + lColor);
  };

  return (
    <div className="ColorInput">
      <InputField
        label="#"
        className="hexField"
        placeHolder="000000"
        maxLength="6"
        maxWidth="6rem"
        onChange={getHexColor}
      />
      <div className="rgbInput">
        <InputField className="rgbInput" label="R" onChange={getRColor} />
        <InputField className="rgbInput" label="G" onChange={getGColor} />
        <InputField className="rgbInput" label="B" onChange={getBColor} />
      </div>
      <div className="hslInput">
        <InputField className="hslInput360" label="H" onChange={getHColor} />
        <InputField label="L" onChange={getLColor} />
        <InputField label="S" onChange={getSColor} />
      </div>
      <div style={{ color: "gray" }}>Exportar paleta</div>
    </div>
  );
}
