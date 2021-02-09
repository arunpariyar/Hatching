// import the react and react DOM library
import React from "react"; //using import statement - ES15 Modules
//const React = require('react'); // CommonJS Modules

import ReactDOM from "react-dom";

// Create a react component
//a function component
const App = () => {
  return <div> Welcome to the Basics </div>;
};

// Take the react compenent and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
