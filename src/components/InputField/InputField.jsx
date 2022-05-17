import React, { useEffect, useState } from "react";
import "./InputField.scss";

export default function InputField(props) {
  const [value, setValue] = useState("");
  const toggleChange = props.onChange;

  const colorHandler = (event) => {
    setValue((valorValido) =>
      event.target.validity.valid ? event.target.value : valorValido
    );

    toggleChange(value);
  };

  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.className === "hexField" ? "text" : "number"}
        min={props.className === "hexField" ? null : 0}
        max={
          props.className === "hexField"
            ? null
            : props.className === "rgbInput"
            ? 255
            : props.className === "hslInput360"
            ? 360
            : 100
        }
        pattern={props.maxLength === "6" ? "[0-9A-Fa-f]*" : "[0-9]*"}
        maxLength={props.maxLength ?? "3"}
        style={{ maxWidth: props.maxWidth ?? "3rem" }}
        placeholder={props.placeHolder ?? "000"}
        value={props.value}
        onChange={colorHandler}
        onKeyUp={colorHandler}
      />
    </>
  );
}
