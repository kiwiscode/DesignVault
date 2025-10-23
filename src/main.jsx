import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import "normalize.css";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { GlobalProvider } from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </ThemeProvider>
    </Router>
  </StrictMode>
);
