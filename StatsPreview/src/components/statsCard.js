import React from "react";
import "normalize.css";
import "../styles/styles.scss";

const App = () => (
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
        <div className="statsCard-stat-container">
          <div>
            <p className="statsCard-stat-fig">10K+</p>
            <p className="statsCard-stat-label">Companies</p>
          </div>
          <div>
            <p className="statsCard-stat-fig">314</p>
            <p className="statsCard-stat-label">Templates</p>
          </div>
          <div>
            <p className="statsCard-stat-fig">12m+</p>
            <p className="statsCard-stat-label">Queries</p>
          </div>
        </div>
      </div>
    </div>
    <div className="statsCard--photo">
      <img className="statsCard--photo__img" src="./assets/team.jpg" />
    </div>
  </div>
);

export default App;
