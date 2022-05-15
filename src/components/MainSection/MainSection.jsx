import React from "react";
import ColorShowcase from "../ColorShowCase/ColorShowcase";
import ColorInput from "../ColorInput/ColorInput";
import "./MainSection.scss";

export default function MainSection(props) {
  return (
    <section className="MainSection">
      <ColorInput />
      <ColorShowcase backgroundColor="#F00" />
    </section>
  );
}
