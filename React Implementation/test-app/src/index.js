// import the react and react DOM library
import React from "react"; //using import statement - ES15 Modules
//const React = require('react'); // CommonJS Modules
import ReactDOM from "react-dom";

// Create a react component
//a function component
// const App = (props) => {
//   return <div> This is just a test app !</div>;
// };

class App extends React.Component {
  state = {
    questionNo: 1,
    question:
      "In deutshland dürfen Menshen offen etwas gegen die Regierung Sagen, Weill....",
    option1: "hier Religionfreiheit gilt",
    option2: "die Menschen Steuern zahlen",
    option3: "die Menschen das Wahlrecht haben",
    option4: "hier Meinungsfreiheit gilt",
  };
  render() {
    return (
      <div>
        <h2>
          {this.state.questionNo}. {this.state.question}
        </h2>
        <ol>
          <li>{this.state.option1}</li>
          <li>{this.state.option2}</li>
          <li>{this.state.option3}</li>
          <li>{this.state.option4}</li>
        </ol>
      </div>
    );
  }
}

// Take the react compenent and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
