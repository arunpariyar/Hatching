console.log("I am the index.js from the src file");

import React from "react";
import ReactDOM from "react-dom";
import StatsCard from "./components/statsCard";

ReactDOM.render(<StatsCard />, document.getElementById("app"));
