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
        <p>Home</p>
        <p>
          This site is a place to learn, explore, and get inspired. Here’s what
          you’ll find:
        </p>
        <ul style={{ fontSize: "1.5rem" }} className="list-none">
          <li>
            <strong>Inspiration:</strong> Websites and resources that inspired
            me.
          </li>
          <li>
            <strong>Components:</strong> Reusable components from my projects.
          </li>
          <li>
            <strong>Assets:</strong> Icons and assets I frequently use.
          </li>
          <li>
            <strong>Practice:</strong> Techniques and coding challenges I enjoy.
          </li>
          <li>
            <strong>Projects:</strong> Links to my work and projects.
          </li>
          <li>
            <strong>Blog:</strong> Articles on frontend, backend, and tech
            tools.
          </li>
        </ul>
      </div>
    </main>
  );
}
