import React from "react";

//stateless function Option Component
const Option = (props) => (
  <div>
    <div className="option">
      <p>
        {props.index}. {props.optionText}
      </p>
      <button
        className="button--link"
        onClick={(e) => {
          props.handleRemoveOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  </div>
);

export default Option;
