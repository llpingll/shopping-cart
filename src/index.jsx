import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle.js";
import Theme from "./theme/Theme.js";
import Router from "./components/utilities/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle>
        <Router />
      </GlobalStyle>
    </ThemeProvider>
  </React.StrictMode>
);
