export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";

export const addRate = ({ author, rate, comment }) => ({
  type: ADD,
  payload: {
    author,
    rate,
    comment,
    id: Math.floor(Math.random() * 1234)
  }
});

export const editRate = ({ author, rate, comment, id }) => ({
  type: EDIT,
  payload: {
    author,
    rate,
    comment,
    id
  }
});

export const deleteRate = (id) => ({
  type: DELETE,
  payload: {
    id
  }
});
