import CopyIcon from "../../images/copy-icon.svg";

import React from "react";
import styled from "styled-components";

import "./ColorInfo.scss";

export default function ColorInfo(props) {
  /* const Title = styled.h3`
    ::after {
      background-color: ${props.afterBackgroundColor};
    }
  `; */

  return (
    <div className="ColorInfo">
      <h3>{props.title.toUpperCase()}</h3>
      <p>{props.value.toUpperCase()}</p>
      <img src={CopyIcon} alt="teste de imagem" />
    </div>
  );
}
