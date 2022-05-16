import React from "react";
import "./ColorBox.scss";

export default function ColorBox(props) {
  const borderRadius = "2rem";

  return (
    <div
      className="ColorBox"
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius:
          props.borderRadius === "left"
            ? `${borderRadius}  0 0 ${borderRadius}`
            : props.borderRadius === "right"
            ? `0 ${borderRadius} ${borderRadius} 0`
            : null,
      }}
    ></div>
  );
}
