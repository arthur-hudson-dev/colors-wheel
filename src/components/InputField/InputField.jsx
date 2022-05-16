import React, { useEffect, useState } from "react";
import "./InputField.scss";

export default function InputField(props) {
  const [value, setValue] = useState("");

  const colorHandler = (event) => {
    setValue((valorValido) =>
      event.target.validity.valid ? event.target.value : valorValido
    );
    props.onChange(value);
  };

  return (
    <>
      <label>{props.label}</label>
      <input
        type="text"
        pattern="[0-9A-Fa-f]*"
        maxLength={props.maxLength ?? "3"}
        style={{ maxWidth: props.maxWidth ?? "3rem" }}
        placeholder={props.placeHolder ?? "000"}
        value={value}
        onChange={colorHandler}
      />
    </>
  );
}

/* onChange={(e) =>
  setValue((value) =>
    e.target.validity.valid ? e.target.value : value
  ) */
