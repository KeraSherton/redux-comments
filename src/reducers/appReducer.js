import { ADD, DELETE, EDIT } from "../actions/appActions";

export const appReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DELETE:
      return state.filter((item) => item.id !== action.payload.id);
    case EDIT:
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          author: action.payload.author,
          rate: action.payload.rate,
          comment: action.payload.comment,
          id: item.id
        };
      });

    default:
      console.warn(`not recognize ${action.type}`);
      return state;
  }
};
