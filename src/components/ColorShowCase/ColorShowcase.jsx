import React, { useEffect } from "react";
import ColorSample from "../ColorSample/ColorSample";
import "./ColorShowcase.scss";

export default function ColorShowcase(props) {
  return (
    <div className="ColorShowcase">
      <ColorSample
        backgroundColor={"hsl(" + props.hslColor + ")"}
        borderRadius={"left"}
      />

      <ColorSample backgroundColor={"rgb(" + props.rgbColor + ")"} />

      <ColorSample
        backgroundColor={props.backgroundColor}
        hexColor={props.hexColor}
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
