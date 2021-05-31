import React from "react";
import "normalize.css";
import "../styles/styles.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="statsCard">
          <div className="statsCard-content">
            <h1 className="statsCard--intro">
              Get <span className="brand">insight</span> that help your business
              grow.
            </h1>
            <p className="statsCard--text">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <div className="statsCard-stat">
              <div>test</div>
              <div>test</div>
              <div>test</div>
            </div>
          </div>
        </div>
        <div className="statsCard--photo">
          <h1>This is where the photo will be</h1>
        </div>
      </div>
    );
  }
}
