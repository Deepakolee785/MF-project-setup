import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundry";
import { StoreProvider } from "store/store";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <ErrorBoundary>
    <StoreProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </StoreProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
