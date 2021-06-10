console.log("I am the index.js from the src file");

import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/styles.scss";

export const App = () => (
  <div className="container">
    <div className="cardContainer">
      <div className="cardContainer__sedans">
        <h1>sedans</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for crusing in the city or on your next road trip.
        </p>
        <button>Learn More</button>
      </div>
      <div className="cardContainer__suvs">
        <h1>suvs</h1>
        <p>
          Take an suv for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off road adventures.
        </p>
        <button>Learn More</button>
      </div>
      <div className="cardContainer__luxury">
        <h1>Luxury</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
