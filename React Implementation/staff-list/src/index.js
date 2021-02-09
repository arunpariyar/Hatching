import React from "react";
import ReactDOM from "react-dom";
import Employee from "./Employee";
import "semantic-ui-css/semantic.min.css";

// create a class component that extends RC
class App extends React.Component {
  //state initialized
  state = { name: "", email: "" };

  //loading the data
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users/3")
      .then((response) => response.json())
      .then((json) => this.setState({ name: json.name, email: json.email }));
  }
  //generating the content
  renderContent() {
    return <Employee name={this.state.name} email={this.state.email} />;
  }
  //rendering the content to app calling on the renderContent function
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

//Render app using reactDOM
ReactDOM.render(<App />, document.querySelector("#root"));
