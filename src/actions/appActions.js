const ADD = "ADD";
const DELETE = "DELETE";
const EDIT = "EDIT";

const addRate = ({ author, rate, comment }) => ({
  type: ADD,
  payload: {
    author,
    rate,
    comment,
    id: Math.floor(Math.random * 1234)
  }
});

const editRate = ({ author, rate, comment, id }) => ({
  type: EDIT,
  payload: {
    author,
    rate,
    comment,
    id
  }
});

const deleteRate = (id) => ({
  type: DELETE,
  payload: {
    id
  }
});
