import React from "react";

const Input = (props) => {
  return (
    <div>
      <label> {props.author} </label>
      <input onChange={props.onChange} value={props.value} type="text">
        {" "}
      </input>
    </div>
  );
};

export default Input;
