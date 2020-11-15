import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import validateAuthorMiddleware from "../middleware/validateAuthor";

const store = createStore(rootReducer);

export default store;
