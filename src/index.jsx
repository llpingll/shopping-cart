import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle.js";
import Theme from "./theme/Theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </ThemeProvider>
  </React.StrictMode>
);
