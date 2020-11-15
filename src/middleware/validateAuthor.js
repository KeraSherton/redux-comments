import { ADD } from "../actions/appActions";

export const validateAuthorMiddleware = ({ dispatch }) => (next) => (
  action
) => {
  if (action.type === ADD && !action.payload.author.length) {
    console.warn("no author");
  }
  next(action);
};
