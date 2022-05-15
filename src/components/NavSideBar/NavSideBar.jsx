import React from "react";

import "./NavSideBar.scss";

import SideBarItem from "../SideBarItem/SideBarItem";

export default function NavSideBar(props) {
  return (
    <nav className="NavSideBar">
      <ul>
        <SideBarItem title="Complementar" isActive={true} />
        <SideBarItem title="Análogo" />
        <SideBarItem title="Tríade" />
        <SideBarItem title="Meio-complementar" />
        <SideBarItem title="Retângulo" />
        <SideBarItem title="Quadrado" />
        <SideBarItem title="Monocromático" />
      </ul>
    </nav>
  );
}
