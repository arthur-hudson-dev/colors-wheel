import React from "react";

import "./SideBarItem.scss";

export default function SideBarItem(props) {
  const clickHandler = props.onClick;
  return (
    <>
      <li className="SideBarItem" onClick={clickHandler}>
        <a
          style={{
            color: props.isActive ? "var(--main-color)" : null,
          }}
          to={props.path}
        >
          {props.title}
        </a>
        {props.isActive ? <div className="afterItem"></div> : null}
      </li>
    </>
  );
}
