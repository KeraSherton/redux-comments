import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRate, editRate } from "./actions/appActions";
// import Input from './Input';

const Form = ({ author = "", rate = 0, comment = "", id, callback }) => {
  const [authorInput, setAuthorInput] = useState(author);
  const [rateInput, setRateInput] = useState(rate);
  const [commentInput, setCommentInput] = useState(comment);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const rateObj = {
      author: authorInput,
      rate: Number(rateInput),
      comment: commentInput,
      id
    };
    console.log(rateObj);
    id ? dispatch(editRate(rateObj)) : dispatch(addRate(rateObj));

    if (id) {
      callback();
    }
  };
  const handleAuthorChange = (event) => setAuthorInput(event.target.value);
  const handleRateChange = (event) => setRateInput(event.target.value);
  const handleCommentChange = (event) => setCommentInput(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Author: </label>
        <input onChange={handleAuthorChange} value={authorInput} type="text" />
      </div>
      <div>
        <label> Rate: </label>
        <input
          onChange={handleRateChange}
          value={rateInput}
          type="range"
          max="10"
          step="1"
        />
      </div>
      <div>
        <label> Comment: </label>
        <input
          onChange={handleCommentChange}
          value={commentInput}
          type="text"
        />
      </div>
      <button type="submit">{id ? "Edit rate" : "Send rate"} </button>
    </form>
  );
};

export default Form;
