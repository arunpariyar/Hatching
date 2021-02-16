import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

//import the main app from the components folder
import App from "./components/App";

//render using ReactDom
ReactDOM.render(<App />, document.querySelector("#root"));
