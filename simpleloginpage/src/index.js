import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Loginform from "./components/App";

var myroot = createRoot(document.getElementById("root"));

myroot.render(<Loginform />);
