import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [barPosition, setBarPosition] = useState(() => {
    return localStorage.getItem("barPosition") || "default_pos";
  });

  useEffect(() => {
    localStorage.setItem("barPosition", barPosition);
  }, [barPosition]);

  return (
    <GlobalContext.Provider value={{ barPosition, setBarPosition }}>
      {children}
    </GlobalContext.Provider>
  );
};
