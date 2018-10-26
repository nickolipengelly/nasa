import React from "react";
import { render } from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PhotoProvider from "./PhotoProvider";

render(
  <BrowserRouter>
    <PhotoProvider>
      <App />
    </PhotoProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
