import { combineReducers } from "redux";

import { appReducer } from "./appReducer";
//import every reducer here

export const rootReducer = combineReducers({
  rates: appReducer
});
