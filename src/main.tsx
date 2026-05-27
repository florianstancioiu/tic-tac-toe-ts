import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TicTacToeContextProvider } from "./context/TicTacToe";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TicTacToeContextProvider>
      <App />
    </TicTacToeContextProvider>
  </React.StrictMode>,
);
