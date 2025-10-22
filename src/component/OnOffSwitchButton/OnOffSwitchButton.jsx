import { useContext, useState } from "react";
import lightsOffAsset from "../../assets/sounds/dark-mode-active.mp3";
import lightsOnAsset from "../../assets/sounds/light-mode-active.mp3";
import "./OnOffSwitchButton.css";
import { ThemeContext } from "../../context/ThemeContext";

export default function OnOffSwitchButton() {
  const [isOn, setIsOn] = useState(null);
  const { toggleTheme, themeName } = useContext(ThemeContext);
  const lightsOff = new Audio(lightsOffAsset);
  const lightsOn = new Audio(lightsOnAsset);

  return (
    <div className={`switch-controller-- hidden ${themeName}`}>
      <div className={`switchyyy ${themeName}`}>
        <div
          onClick={() => {
            if (themeName === "light-theme") lightsOff.play();
            if (themeName === "dark-theme") lightsOn.play();
            setIsOn(!isOn);
            toggleTheme();
          }}
          className={`clicky-meee ${isOn && "active"} ${themeName}`}
        ></div>
      </div>
    </div>
  );
}
