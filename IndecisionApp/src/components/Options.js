import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header--text">Your Options</h3>
      <button className="button--link" onClick={props.handleRemoveAll}>
        Remove All
      </button>
    </div>

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

export default Options;
