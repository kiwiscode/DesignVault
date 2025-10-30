import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";

const OffSetText = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  gap: 8px;

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

const Practice = () => {
  const { themeName } = useContext(ThemeContext);
  return (
    <main
      style={{
        height: "100dvh",
      }}
      className="chirp-extended-heavy text-3xl max-md:text-xl text-left md:mt-5 max-md:mt-[20px] flex justify-start items-start"
    >
      <div className="md:mb-40 offset-text-home-- relative">
        <OffSetText
          style={{
            color: themeName === "dark-theme" && "#ffffff",
          }}
        >
          Coding{" "}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            className="size-6"
          >
            <path
              fill={themeName === "dark-theme" ? "#fff" : "#000000"}
              d="M1024 128v1792H896V128h128z"
            />
          </svg>{" "} */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M3 12v.01M7 12h10m4 0v.01"
            />
          </svg>{" "}
          Problems{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M3 12v.01M7 12h10m4 0v.01"
            />
          </svg>{" "}
          Algorithms{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M3 12v.01M7 12h10m4 0v.01"
            />
          </svg>{" "}
          Efficient Solutions
        </OffSetText>
      </div>
    </main>
  );
};

export default Practice;
