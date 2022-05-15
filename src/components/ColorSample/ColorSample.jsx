import React from "react";
import ColorBox from "../ColorBox/ColorBox";
import ColorInfo from "../ColorInfo/ColorInfo";
import "./ColorSample.scss";

export default function ColorSample(props) {
  return (
    <div>
      <ColorBox backgroundColor={props.backgroundColor} />
      <ColorInfo
        title="HEX"
        value="#FF0000"
        afterBackgroundColor={props.backgroundColor}
      />
      <ColorInfo
        title="RGB"
        value="255, 0, 0"
        afterBackgroundColor={props.backgroundColor}
      />
      <ColorInfo
        title="HSL"
        value="100, 100%, 50%"
        afterBackgroundColor={props.backgroundColor}
      />
    </div>
  );
}
