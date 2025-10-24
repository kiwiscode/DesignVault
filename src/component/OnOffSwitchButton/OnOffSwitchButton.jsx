import { useContext, useState } from "react";
import lightsOffAsset from "../../assets/sounds/dark-mode-active.mp3";
import lightsOnAsset from "../../assets/sounds/light-mode-active.mp3";
import "./OnOffSwitchButton.css";
import { ThemeContext } from "../../context/ThemeContext";
import { GlobalContext } from "../../context/AppContext";

export default function OnOffSwitchButton() {
  const { toggleTheme, themeName } = useContext(ThemeContext);
  const { barPosition } = useContext(GlobalContext);
  const lightsOff = new Audio(lightsOffAsset);
  const lightsOn = new Audio(lightsOnAsset);
  return (
    <div className={`switch-controller--  ${themeName}`}>
      <div className={`wrapper-- ${barPosition}`}>
        <div className={`switchyyy ${themeName} `}>
          <div
            onClick={() => {
              if (themeName === "light-theme") lightsOff.play();
              if (themeName === "dark-theme") lightsOn.play();

              toggleTheme();
            }}
            className={`clicky-meee ${themeName}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
