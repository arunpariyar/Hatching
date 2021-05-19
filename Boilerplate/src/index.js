console.log("I am the index.js from the src file");

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <div> Hey ! I am a React App</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
