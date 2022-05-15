import React, { useState } from "react";

import "./SideBarItem.scss";

export default function SideBarItem(props) {
  const isActive = props.isActive;
  const [isMouseOver, setIsMouseOver] = useState(false);

  function mouseOverHandler() {
    setIsMouseOver(true);
    console.log(isMouseOver);
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    console.log(isMouseOver);
  }

  return (
    <>
      <li
        onMouseOver={() => mouseOverHandler()}
        onMouseLeave={() => mouseLeaveHandler()}
        className="SideBarItem"
      >
        <a style={{ color: isActive ? "#000" : null }} href="/">
          {props.title}
        </a>
        {isActive ? <div className="afterItem"></div> : null}
      </li>
    </>
  );
}
