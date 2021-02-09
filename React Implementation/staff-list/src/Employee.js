import React from "react";
import "./Employee.css";

//create a functional Component
const Employee = (props) => {
  return (
    <div className="employee">
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
    </div>
  );
};

//export
export default Employee;
