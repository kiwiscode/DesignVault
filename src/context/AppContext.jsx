import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [barPosition, setBarPosition] = useState(() => {
    return localStorage.getItem("barPosition") || "default_pos";
  });
  const [onOffSwitchButtonPosition, setOnOffSwitchButtonPosition] = useState(
    () => {
      return localStorage.getItem("onOffSwitchButtonPosition") || "0 2% 0 auto";
    }
  );

  useEffect(() => {
    localStorage.setItem("barPosition", barPosition);
    localStorage.setItem(
      "onOffSwitchButtonPosition",
      onOffSwitchButtonPosition
    );
  }, [barPosition, onOffSwitchButtonPosition]);

  return (
    <GlobalContext.Provider
      value={{
        barPosition,
        setBarPosition,
        onOffSwitchButtonPosition,
        setOnOffSwitchButtonPosition,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
