import React from "react";
import "./ColorBox.scss";

export default function ColorBox(props) {
  return (
    <div
      className="ColorBox"
      style={{
        backgroundColor: props.backgroundColor,
      }}
    ></div>
  );
}
