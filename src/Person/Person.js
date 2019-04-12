import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Hi, I am {props.name}. I am {props.age} years old! {props.hobby}
      </p>
      <p>{props.children}</p>
      <input type="txt" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
