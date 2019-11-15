import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { movies } from "./reducer/index";

export const store = createStore(movies, applyMiddleware(thunk));
