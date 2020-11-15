import React, { useState } from "react";
import Form from "./Form";

const Element = ({ author, rate, id, comment }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible((prev) => !prev);
  const buttonEdit = isVisible ? (
    <Form
      author={author}
      rate={rate}
      comment={comment}
      callback={toggle}
      id={id}
    />
  ) : (
    <button onClick={toggle}> Edit </button>
  );

  return (
    <li>
      <p> Auhor: {author} </p>
      <p> Rate: {rate}</p>
      <p> Comment: {comment}</p>
      {buttonEdit}
    </li>
  );
};
export default Element;
