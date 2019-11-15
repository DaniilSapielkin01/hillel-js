import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { loadingReducer } from "./loadingReducer";

export const rootReducer = combineReducers({
  countReducer,
  loadingReducer
});
