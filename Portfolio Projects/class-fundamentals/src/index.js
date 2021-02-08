//import react and react dom
import React from "react";
import ReactDOM from "react-dom";

//create a class component that prints data from jsonplace holder

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", error: "" };

    //logic
    fetch("https://jsonplaceholder.typicode.com")
      .then((reponse) => reponse.json())
      .then((json) => this.setState({ name: json.name, email: json.email }))
      .catch((err) => this.setState({ error: "Query unsuccessful" }));
  }
  render() {
    if (this.state.name && this.state.email && !this.state.error) {
      return (
        <div>
          <h2>{this.state.name}</h2>
          <h2>{this.state.email}</h2>
        </div>
      );
    }
    if (this.state.error && !this.state.email && !this.state.name) {
      return (
        <div>
          <h2>{this.state.error}</h2>
        </div>
      );
    }
    return <div>Loading!</div>;
  }
}

//render the app using react DOM
ReactDOM.render(<App />, document.querySelector("#root"));
