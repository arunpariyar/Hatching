import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// const App = (props) => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    //Initializing our app state !!! the this.state is only to be assigned here once.
    this.state = { lat: null };

    //logic code goes underneat
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ lat: position.coords.latitude });
    });
  }
  render() {
    return (
      <div>
        <h1>Latitude: {this.state.lat}</h1>
        <SeasonDisplay season="Its Winter" />;
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
