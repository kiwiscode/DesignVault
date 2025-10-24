import {
  useContext,
  useEffect,
  useState,
  useTransition,
  ViewTransition,
} from "react";
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
  const [_transition, startTransition] = useTransition();
  const [position, setPosition] = useState("0 2% 0 2%");

  useEffect(() => {
    startTransition(() => {
      setPosition((prevPos) =>
        barPosition === "align_left"
          ? "0 2% 0 auto"
          : barPosition === "align_right"
          ? "0 2% 0 2%"
          : barPosition === "default_pos"
          ? prevPos
          : "0 2% 0 2%"
      );
    });
  }, [barPosition]);
  console.log("bar position:", barPosition);
  return (
    <div className={`switch-controller--  ${themeName}`}>
      <div className={`wrapper-- ${barPosition}`}>
        <ViewTransition>
          <div
            className={`switchyyy ${themeName}`}
            style={{
              margin: position,
            }}
          >
            <div
              onClick={() => {
                if (themeName === "light-theme") lightsOff.play();
                if (themeName === "dark-theme") lightsOn.play();

                toggleTheme();
              }}
              className={`clicky-meee ${themeName}`}
            ></div>
          </div>
        </ViewTransition>
      </div>
    </div>
  );
}
