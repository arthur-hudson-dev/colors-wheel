import React, { useState } from "react";

import "./NavSideBar.scss";

import SideBarItem from "../SideBarItem/SideBarItem";

export default function NavSideBar(props) {
  const [itemTitle, setItemTitle] = useState("Complementar");

  function clickHandler(title) {
    setItemTitle(title);
  }

  return (
    <nav className="NavSideBar">
      <ul>
        <SideBarItem
          title="Complementar"
          onClick={() => clickHandler("Complementar")}
          isActive={itemTitle === "Complementar" ? true : false}
        />
        <SideBarItem
          title="Análogo"
          onClick={() => clickHandler("Análogo")}
          isActive={itemTitle === "Análogo" ? true : false}
        />
        <SideBarItem
          title="Tríade"
          onClick={() => clickHandler("Tríade")}
          isActive={itemTitle === "Tríade" ? true : false}
        />
        <SideBarItem
          title="Meio-complementar"
          onClick={() => clickHandler("Meio-complementar")}
          isActive={itemTitle === "Meio-complementar" ? true : false}
        />
        <SideBarItem
          title="Retângulo"
          onClick={() => clickHandler("Retângulo")}
          isActive={itemTitle === "Retângulo" ? true : false}
        />
        <SideBarItem
          title="Quadrado"
          onClick={() => clickHandler("Quadrado")}
          isActive={itemTitle === "Quadrado" ? true : false}
        />
        <SideBarItem
          title="Monocromático"
          onClick={() => clickHandler("Monocromático")}
          isActive={itemTitle === "Monocromático" ? true : false}
        />
      </ul>
    </nav>
  );
}
