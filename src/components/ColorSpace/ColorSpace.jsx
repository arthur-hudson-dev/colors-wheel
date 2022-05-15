import React, { useState, useEffect } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./ColorsSpace.scss";

export default function ColorsSpace(props) {
  const min = 0;
  const max = 360;
  const randomColor = Math.floor(Math.random() * (max - min) + min);
  const [mainColor, setMainColor] = useState(0);
  const [firstColorOption, setFirstColorOption] = useState(0);
  const [secondColorOption, setSecondColorOption] = useState(0);
  const [thirdColorOption, setThirdColorOption] = useState(0);
  const [fourthColorOption, setFourthColorOption] = useState(0);
  const [hueHandler, setHueHandler] = useState(randomColor);
  const [saturationHandler, setSaturationHandler] = useState(50);
  const [lightnessHandler, setLightnessHandler] = useState(50);

  useEffect(function () {
    setMainColor(+hueHandler);
  });

  useEffect(function () {
    if (mainColor + 90 > 360) {
      setFirstColorOption(90 - (max - mainColor));
      setSecondColorOption(110 - (max - mainColor));
    } else {
      setFirstColorOption(mainColor + 90);
      setSecondColorOption(mainColor + 140);
    }
  });

  useEffect(function () {
    const thirdColorPass = 30;
    const fourthColorPass = 60;
    if (mainColor + thirdColorPass > 360) {
      setThirdColorOption(thirdColorPass - (max - mainColor));
      setFourthColorOption(fourthColorPass - (max - mainColor));
    } else {
      setThirdColorOption(mainColor + thirdColorPass);
      setFourthColorOption(mainColor + fourthColorPass);
    }
  });

  function ColorChanger(hue, saturation, lightness) {
    return `hsl(${hue},${saturation}%,${lightness}%)`;
  }
  return (
    <div className="mainLayout">
      <div className="colorsSpace">
        <ColorBox
          backgroundColor={ColorChanger(
            secondColorOption,
            saturationHandler,
            lightnessHandler
          )}
        />
        <ColorBox
          backgroundColor={ColorChanger(
            firstColorOption,
            saturationHandler,
            lightnessHandler
          )}
        />
        <ColorBox
          backgroundColor={ColorChanger(
            mainColor,
            saturationHandler,
            lightnessHandler
          )}
        />
        <ColorBox
          backgroundColor={ColorChanger(
            thirdColorOption,
            saturationHandler,
            lightnessHandler
          )}
        />
        <ColorBox
          backgroundColor={ColorChanger(
            fourthColorOption,
            saturationHandler,
            lightnessHandler
          )}
        />
      </div>

      <div className="inputSection">
        <div className="colorRange">
          <label>H</label>
          <input
            type="range"
            min="0"
            max="360"
            value={hueHandler}
            onChange={(e) => setHueHandler(e.target.value)}
          />
        </div>
        <div className="colorRange">
          <label>S</label>
          <input
            type="range"
            min="0"
            max="100"
            value={saturationHandler}
            onChange={(e) => setSaturationHandler(e.target.value)}
          />
        </div>
        <div className="colorRange">
          <label>L</label>
          <input
            type="range"
            min="0"
            max="100"
            value={lightnessHandler}
            onChange={(e) => setLightnessHandler(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
