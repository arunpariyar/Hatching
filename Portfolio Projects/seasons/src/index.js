import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <h2> Latitude : {this.state.lat}</h2>;
    }

    if (this.state.errorMessage && !this.state.lat) {
      return <h2>Error: {this.state.errorMessage}</h2>;
    }

    return <h1>Loading</h1>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
