import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
      {props.options.length === 0 && (
        <p>Please enter your to do's to get started</p>
      )}
      {props.options.map((option, index) => (
        <Option
          key={index}
          optionText={option}
          handleRemoveOption={props.handleRemoveOption}
        />
      ))}
    </div>
  );
};

export default Options;
