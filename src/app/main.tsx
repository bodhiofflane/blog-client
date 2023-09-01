import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import Provider from "./providers";

import "../shared/styles/main.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider />
    <ToastContainer position="top-left" />
  </>
);
