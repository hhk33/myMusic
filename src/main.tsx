import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "normalize.css";
import { ThemeProvider } from "styled-components";

import App from "@/App";
import store from "./store";
import "@/assets/css/reset.less";
import theme from "@/assets/theme/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
