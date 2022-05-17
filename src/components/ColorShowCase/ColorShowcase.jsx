import React from "react";
import ColorSample from "../ColorSample/ColorSample";
import "./ColorShowcase.scss";

export default function ColorShowcase(props) {
  console.log(
    "Color ShowCase: " + props.rgbColor + "/ " + props.backgroundColor
  );
  return (
    <div className="ColorShowcase">
      <ColorSample
        backgroundColor={props.backgroundColor}
        borderRadius={"left"}
      />
      <ColorSample backgroundColor={props.backgroundColor} />
      <ColorSample
        backgroundColor={props.backgroundColor}
        rgbColor={props.rgbColor}
        hslColor={props.hslColor}
      />
      <ColorSample backgroundColor={props.backgroundColor} />
      <ColorSample
        backgroundColor={props.backgroundColor}
        borderRadius={"right"}
      />
    </div>
  );
}
