import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import GlobalStyle from "./styles/Global";
import { DataContextProvider } from "./shared/contexts/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
      <GlobalStyle />
    </DataContextProvider>
  </React.StrictMode>
);
