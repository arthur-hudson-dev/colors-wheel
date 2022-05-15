import React, { useState } from "react";
import InputField from "../InputField/InputField";
import "./ColorInput.scss";

export default function ColorInput(props) {
  return (
    <div className="ColorInput">
      <InputField
        label="#"
        className="hexField"
        value="000000"
        maxLength="6"
        maxWidth="6rem"
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
    </div>
  );
}
