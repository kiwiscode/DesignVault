import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";

const OffSetText = styled.div`
  position: relative;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    bottom: -5px;
    left: 0;
    border-radius: 4px;
    transform: rotate(-2deg);
    z-index: -1;
    background: #4e54c8; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #8f94fb,
      #4e54c8
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #8f94fb,
      #4e54c8
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;

const FlyingbObject = styled.div``;

export default function Home() {
  const { themeName } = useContext(ThemeContext);
  console.log("theme name:", themeName);
  return (
    <main
      style={{
        height: "100dvh",
      }}
      className="chirp-extended-heavy text-3xl max-md:text-xl text-center flex justify-center items-center"
    >
      <div className="md:mb-40 offset-text-home-- relative">
        <FlyingbObject></FlyingbObject>
        <OffSetText
          style={{
            color: themeName === "dark-theme" && "#ffffff",
          }}
        >
          I’m sharing here the things I use <br /> and the ones I think are
          worth using
        </OffSetText>
      </div>
    </main>
  );
}
