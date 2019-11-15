import React from "react";
import { Route, Switch } from "react-router-dom";

import { MyMoviesContainer } from "../conteiners/MyMovies";
import { Greeting } from "../components/Greeting";
import { Header } from "../components/Header";

export const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Greeting} />
        <Route path="/movies" component={MyMoviesContainer} />
      </Switch>
    </div>
  );
};
