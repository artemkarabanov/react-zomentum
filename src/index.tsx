import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./ui/reset.scss";
import "./ui/base.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
