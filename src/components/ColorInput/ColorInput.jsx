import React, { useState } from "react";
import InputField from "../InputField/InputField";
import "./ColorInput.scss";

export default function ColorInput(props) {
  const onChange = props.onChange;
  return (
    <div className="ColorInput">
      <InputField
        label="#"
        className="hexField"
        placeHolder="000000"
        maxLength="6"
        maxWidth="6rem"
        onChange={onChange}
      />
      <div className="rgbInput">
        <InputField label="R" />
        <InputField label="G" />
        <InputField label="B" />
      </div>
      <div className="hslInput">
        <InputField label="H" />
        <InputField label="L" />
        <InputField label="S" />
      </div>
      <div style={{ color: "gray" }}>Exportar paleta</div>
    </div>
  );
}
