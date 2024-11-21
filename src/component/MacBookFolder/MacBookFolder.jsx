import { useEffect, useRef, useState } from "react";
import "./MacBookFolder.css";
function MacBookFolder({ folderName }) {
  const folderRef = useRef(null);
  const [folderClicked, setFolderClicked] = useState(false);

  // detecting a click outside the folder
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (folderRef.current && !folderRef.current.contains(e.target)) {
        setFolderClicked(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div>
        <div
          ref={folderRef}
          onClick={() => setFolderClicked(true)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            className="folder-top-wrapper--"
            style={{
              background: folderClicked && "#908A83",
              opacity: 0.8,
              boxShadow:
                folderClicked &&
                "0px 4px 8px rgba(0, 0, 0, 0.1),inset 0px 1px 3px rgba(255, 255, 255, 0.6)",
              border: folderClicked
                ? "2px solid #B4AFA8"
                : "2px solid transparent",
            }}
          ></div>
          <div className="folder-img-wrapper">
            <div className="shadowed-parent-behind--master"></div>
            <div className="shadowed-parent-behind--"></div>
            <div className="page first"></div>
            <div className="page second"></div>
            <div className="page third"></div>
          </div>

          <div
            style={{
              cursor: "default",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: "800",
                color: folderClicked ? "white" : "#333",
                padding: "2px 6px",
                backgroundColor: folderClicked ? "#0059D1" : "transparent",
                borderRadius: "3px",
                position: "relative",
                top: "2px",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.15)",
              }}
            >
              {folderName}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MacBookFolder;
