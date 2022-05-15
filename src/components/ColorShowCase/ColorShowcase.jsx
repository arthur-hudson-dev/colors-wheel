import React from "react";
import ColorBox from "../ColorBox/ColorBox";
import ColorInfo from "../ColorInfo/ColorInfo";
import ColorSample from "../ColorSample/ColorSample";
import "./ColorShowcase.scss";

export default function ColorShowcase(props) {
  return (
    <div className="ColorShowcase">
      <ColorSample backgroundColor={props.backgroundColor} />
      <ColorSample backgroundColor={props.backgroundColor} />
      <ColorSample backgroundColor={props.backgroundColor} />
      <ColorSample backgroundColor={props.backgroundColor} />
      <ColorSample backgroundColor={props.backgroundColor} />
    </div>
  );
}
