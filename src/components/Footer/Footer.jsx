import React from "react";
import "./Footer.scss";

export default function Footer(props) {
  return (
    <footer className="Footer">
      <span>
        Desined and coded by{" "}
        <a href="https://github.com/arthur-hudson-dev/" target="_blank">
          Arthur Hudson
        </a>
        . See the project design in{" "}
        <a
          href="https://www.figma.com/file/RNIyAYap23kL6wsoHrGTO1/Untitled?node-id=0%3A1"
          target="_blank"
        >
          Figma
        </a>
      </span>
    </footer>
  );
}
