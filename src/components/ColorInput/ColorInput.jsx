import React, { useState, useEffect } from "react";
import InputField from "../InputField/InputField";
import "./ColorInput.scss";

export default function ColorInput(props) {
  const getHexColor = props.getHexColor;
  const getRColor = props.getRColor;
  const getGColor = props.getGColor;
  const getBColor = props.getBColor;
  const getHColor = props.getHColor;
  const getSColor = props.getSColor;
  const getLColor = props.getLColor;

  useEffect(function () {});

  return (
    <div className="ColorInput">
      <InputField
        className="hexField"
        label="#"
        placeHolder="000000"
        value={props.hexColor.toUpperCase()}
        maxLength="6"
        maxWidth="6rem"
        onChange={getHexColor}
      />
      <div className="rgbInput">
        <InputField
          className="rgbInput"
          label="R"
          value={props.rColor}
          onChange={getRColor}
        />
        <InputField
          className="rgbInput"
          label="G"
          value={props.gColor}
          onChange={getGColor}
        />
        <InputField
          className="rgbInput"
          label="B"
          value={props.bColor}
          onChange={getBColor}
        />
      </div>
      <div className="hslInput">
        <InputField
          className="hslInput360"
          label="H"
          value={props.hColor}
          onChange={getHColor}
        />
        <InputField label="S" value={props.sColor} onChange={getSColor} />
        <InputField label="L" value={props.lColor} onChange={getLColor} />
      </div>
      <div style={{ color: "gray" }}>Exportar paleta</div>
    </div>
  );
}
