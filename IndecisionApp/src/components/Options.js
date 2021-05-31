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
    <div>
      {props.options.length === 0 && (
        <p className="widget-header--message">
          Please enter your to do's to get started
        </p>
      )}
      {props.options.map((option, index) => (
        <Option
          key={index}
          optionText={option}
          handleRemoveOption={props.handleRemoveOption}
          index={index + 1}
        />
      ))}
    </div>
  </div>
);

export default Options;
