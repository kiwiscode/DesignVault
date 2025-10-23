import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Home() {
  const { themeName } = useContext(ThemeContext);
  console.log("theme name:", themeName);
  return (
    <main
      style={{
        color: themeName === "dark-theme" && "#ffffff",
      }}
      className="chirp-regular-font px-[36px] mt-[60px]"
    >
      <div
        style={{
          fontSize: "2rem",
        }}
      >
        home
      </div>
    </main>
  );
}
