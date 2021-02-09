import React from "react";

const LoadingSpinner = (props) => {
  return (
    <div className="loading-spinner">
      <div class="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

//Assigning DefaultProps
LoadingSpinner.defaultProps = {
  message: "Loading...",
};

export default LoadingSpinner;
