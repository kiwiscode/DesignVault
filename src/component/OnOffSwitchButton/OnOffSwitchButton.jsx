import { useContext, useEffect, useTransition, ViewTransition } from "react";
import lightsOffAsset from "../../assets/sounds/dark-mode-active.mp3";
import lightsOnAsset from "../../assets/sounds/light-mode-active.mp3";
import "./OnOffSwitchButton.css";
import { ThemeContext } from "../../context/ThemeContext";
import { GlobalContext } from "../../context/AppContext";
export default function OnOffSwitchButton() {
  const { toggleTheme, themeName } = useContext(ThemeContext);
  const {
    barPosition,
    onOffSwitchButtonPosition,
    setOnOffSwitchButtonPosition,
  } = useContext(GlobalContext);
  const lightsOff = new Audio(lightsOffAsset);
  const lightsOn = new Audio(lightsOnAsset);
  const [_transition, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setOnOffSwitchButtonPosition((prevPos) => {
        const alignLeftPositions = [
          "0 2% 0 auto",
          "calc(100vh - 140px) 2% 0 auto",
        ];
        const alignRightPositions = [
          "0 2% 0 2%",
          "calc(100vh - 140px) 2% 0 2%",
        ];

        if (barPosition === "align_left") {
          if (prevPos === "0 2% 0 2%") return "0 2% 0 auto";
          if (prevPos === "calc(100vh - 140px) 2% 0 2%")
            return "calc(100vh - 140px) 2% 0 auto";
          return alignLeftPositions.includes(prevPos) ? prevPos : "0 2% 0 auto";
        } else if (barPosition === "align_right") {
          if (prevPos === "0 2% 0 auto") return "0 2% 0 2%";
          if (prevPos === "calc(100vh - 140px) 2% 0 auto")
            return "calc(100vh - 140px) 2% 0 2%";
          return alignRightPositions.includes(prevPos) ? prevPos : "0 2% 0 2%";
        } else if (barPosition === "default_pos") {
          if (prevPos === "calc(100vh - 140px) 2% 0 2%") {
            return "0 2% 0 2%";
          } else if (prevPos === "calc(100vh - 140px) 2% 0 auto") {
            return "0 2% 0 auto";
          } else {
            return prevPos;
          }
        } else if (barPosition === "align_top") {
          if (prevPos === "0 2% 0 2%") {
            return "calc(100vh - 140px) 2% 0 2%";
          } else if (prevPos === "0 2% 0 auto") {
            return "calc(100vh - 140px) 2% 0 auto";
          } else {
            return prevPos;
          }
        } else {
          return prevPos;
        }
      });
    });
  }, [barPosition]);

  return (
    <div className={`switch-controller--  ${themeName}`}>
      <div className={`wrapper-- ${barPosition}`}>
        <ViewTransition>
          <div
            className={`switchyyy max-md:w-[72px] max-md:h-[72px] w-[100px] h-[100px] ${themeName}`}
            style={{
              margin: onOffSwitchButtonPosition,
            }}
          >
            <div
              onClick={() => {
                if (themeName === "light-theme") lightsOff.play();
                if (themeName === "dark-theme") lightsOn.play();

                toggleTheme();
              }}
              className={`clicky-meee max-md:w-[17px] max-md:h-[25px] w-[30px] h-[40px] ${themeName}`}
            ></div>
          </div>
        </ViewTransition>
      </div>
    </div>
  );
}
