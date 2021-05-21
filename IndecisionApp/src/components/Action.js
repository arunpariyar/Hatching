import React from "react";

console.log("testing");

const Action = (props) => {
  return (
    <button onClick={props.handlePick} disabled={!props.hasOptions}>
      What Should I Do
    </button>
  );
};

export default Action;
