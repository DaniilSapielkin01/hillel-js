import axios from "axios";

import {
  GET_MOVIES_PENDING,
  GET_MOVIES_REJECTED,
  GET_MOVIES_RESOLVED,
  URL_MOVIE
} from "../constants";
import { history } from "../index";

const getMoviesPending = () => ({
  type: GET_MOVIES_PENDING
});

const getMoviesResolved = payload => ({
  type: GET_MOVIES_RESOLVED,
  payload
});

const getMoviesRejected = () => ({
  type: GET_MOVIES_REJECTED,
  payload: "Something wrong!!!"
});

export const getMovies = () => {
  return dispatch => {
    //запрос пошел
    dispatch(getMoviesPending());
    axios(URL_MOVIE)
      .then(({ data }) => {
        history.push("/");
        dispatch(getMoviesResolved(data.movie));
      })
      .catch(error => {
        console.log(error);
        dispatch(getMoviesRejected());
      });
  };
};
