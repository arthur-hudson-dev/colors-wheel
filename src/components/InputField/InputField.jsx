import React, { useEffect, useState } from "react";
import "./InputField.scss";

export default function InputField(props) {
  const [value, setValue] = useState(props.value ?? 0);

  return (
    <>
      <label>{props.label}</label>
      <input
        type="text"
        pattern="[0-9A-Fa-f]*"
        maxLength={props.maxLength ? "6" : "3"}
        style={{ maxWidth: props.maxWidth ?? "3rem" }}
        value={value}
        onChange={(e) =>
          setValue((v) => (e.target.validity.valid ? e.target.value : v))
        }
      />
    </>
  );
}
