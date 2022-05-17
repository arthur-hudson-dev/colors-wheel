import React from "react";
import ColorBox from "../ColorBox/ColorBox";
import ColorInfo from "../ColorInfo/ColorInfo";
import "./ColorSample.scss";

export default function ColorSample(props) {
  console.log("Color Sample: " + props.rgbColor + "/ " + props.backgroundColor);
  return (
    <div>
      <ColorBox
        backgroundColor={props.backgroundColor}
        borderRadius={props.borderRadius}
      />
      <ColorInfo
        title="HEX"
        value={props.backgroundColor}
        afterBackgroundColor={props.backgroundColor}
      />
      <ColorInfo
        title="RGB"
        value={props.rgbColor ?? ""}
        afterBackgroundColor={props.backgroundColor}
      />
      <ColorInfo
        title="HSL"
        value={props.hslColor ?? ""}
        afterBackgroundColor={props.backgroundColor}
      />
    </div>
  );
}
