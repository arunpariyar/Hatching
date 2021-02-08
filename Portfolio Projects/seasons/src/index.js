import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import LoadingSpinner from "./LoadingSpinner";
import "semantic-ui-css/semantic.min.css";

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
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (this.state.errorMessage && !this.state.lat) {
      return <h2>Error: {this.state.errorMessage}</h2>;
    }

    return <LoadingSpinner message="Please accept your location request" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
