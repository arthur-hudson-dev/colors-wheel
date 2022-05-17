import React, { useState, useEffect } from "react";
import ColorShowcase from "../ColorShowCase/ColorShowcase";
import ColorInput from "../ColorInput/ColorInput";
import "./MainSection.scss";

export default function MainSection(props) {
  // Initial values
  // Initial RGB values
  const [R, setR] = useState(Math.floor(Math.random() * 255));
  const [G, setG] = useState(Math.floor(Math.random() * 255));
  const [B, setB] = useState(Math.floor(Math.random() * 255));
  //Initial hexadecimal values based on initial RGB values
  const [RHex, setRHex] = useState(
    R <= 15 ? "0" + R.toString(16) : R.toString(16)
  );
  const [GHex, setGHex] = useState(
    G <= 15 ? "0" + G.toString(16) : G.toString(16)
  );
  const [BHex, setBHex] = useState(
    B <= 15 ? "0" + B.toString(16) : B.toString(16)
  );
  //Initial HSL values based on initial RGB values
  const [RHsl, setRHsl] = useState(R / 255);
  const [GHsl, setGHsl] = useState(G / 255);
  const [BHsl, setBHsl] = useState(B / 255);
  const [LCalc, setLCalc] = useState(Math.max(RHsl, GHsl, BHsl));
  const [SCalc, setSCalc] = useState(LCalc - Math.min(RHsl, GHsl, BHsl));
  const [HCalc, setHCalc] = useState(
    SCalc
      ? LCalc === RHsl
        ? (GHsl - BHsl) / SCalc
        : LCalc === GHsl
        ? 2 + (BHsl - RHsl) / SCalc
        : 4 + (RHsl - GHsl) / SCalc
      : 0
  );
  const [H, setH] = useState(
    Math.round(60 * HCalc < 0 ? 60 * HCalc + 360 : 60 * HCalc)
  );
  const [S, setS] = useState(
    Math.round(
      100 *
        (SCalc
          ? LCalc <= 0.5
            ? SCalc / (2 * LCalc - SCalc)
            : SCalc / (2 - (2 * LCalc - SCalc))
          : 0)
    )
  );
  const [L, setL] = useState(Math.round((100 * (2 * LCalc - SCalc)) / 2));
  //Variables to get the whole color expression
  const [hexColor, setHexColor] = useState(RHex + GHex + BHex);
  const [rgbColor, setRGBColor] = useState("");
  const [hslColor, setHSLColor] = useState(H + ", " + S + ", " + L);
  //Auxiliar variable
  const [thisHexColor, setThisHexColor] = useState(hexColor);
  //Get Hexadecimal value on input
  const getHexColor = (color) => {
    setHexColor(color);
  };
  //Get RGB color by updating the colors separately
  const getRColor = (color) => {
    setR(color);
  };
  const getGColor = (color) => {
    setG(color);
  };
  const getBColor = (color) => {
    setB(color);
  };
  //Get HSL color by updating the colors separately
  const getHColor = (color) => {
    setH(color);
  };
  const getLColor = (color) => {
    setL(color);
  };
  const getSColor = (color) => {
    setS(color);
  };

  useEffect(function () {
    setRGBColor(R + ", " + G + ", " + B);
    setHSLColor(H + ", " + S + "%, " + L + "%");
  });

  //Update RGB color based on Hexadecimal input change
  useEffect(
    function () {
      if (hexColor.length === 6) {
        setR(parseInt(hexColor[0] + hexColor[1], 16));
        setG(parseInt(hexColor[2] + hexColor[3], 16));
        setB(parseInt(hexColor[4] + hexColor[5], 16));
      } else if (hexColor.length === 3) {
        setR(parseInt(hexColor[0] + hexColor[0], 16));
        setG(parseInt(hexColor[1] + hexColor[1], 16));
        setB(parseInt(hexColor[2] + hexColor[2], 16));
      } else if (hexColor.length === 0) {
        setR(0);
        setG(0);
        setB(0);
      }
    },
    [hexColor]
  );
  //Update HSL values based on Hexadecimal input change
  useEffect(function () {
    if (hexColor.length === 6 || hexColor.length === 3) {
      setRHsl(R / 255);
      setGHsl(G / 255);
      setBHsl(B / 255);
      setLCalc(Math.max(RHsl, GHsl, BHsl));
      setSCalc(LCalc - Math.min(RHsl, GHsl, BHsl));
      setHCalc(
        SCalc
          ? LCalc === RHsl
            ? (GHsl - BHsl) / SCalc
            : LCalc === GHsl
            ? 2 + (BHsl - RHsl) / SCalc
            : 4 + (RHsl - GHsl) / SCalc
          : 0
      );
      setH(Math.round(60 * HCalc < 0 ? 60 * HCalc + 360 : 60 * HCalc));
      setS(
        Math.round(
          100 *
            (SCalc
              ? LCalc <= 0.5
                ? SCalc / (2 * LCalc - SCalc)
                : SCalc / (2 - (2 * LCalc - SCalc))
              : 0)
        )
      );
      setL(Math.round((100 * (2 * LCalc - SCalc)) / 2));
    } else if (hexColor.length === 0) {
      setH(0);
      setS(0);
      setL(0);
    }
  });

  return (
    <section className="MainSection">
      <ColorInput
        getHexColor={getHexColor}
        getRColor={getRColor}
        getGColor={getGColor}
        getBColor={getBColor}
        getHColor={getHColor}
        getSColor={getLColor}
        getLColor={getSColor}
        hexColor={hexColor}
        rColor={R}
        gColor={G}
        bColor={B}
        hColor={H}
        sColor={S}
        lColor={L}
      />
      <ColorShowcase
        backgroundColor={"#" + hexColor}
        hexColor={"#" + hexColor}
        rgbColor={rgbColor}
        hslColor={hslColor}
      />
    </section>
  );
}
