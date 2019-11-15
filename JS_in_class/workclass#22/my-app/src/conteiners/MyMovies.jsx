import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions/Movies";

class MyMovies extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    const { isLoading, errorMsg, movies } = this.props;

    console.log(this.props);
    return (
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          movies.map((item, i) => <div key={i}>{item.title}</div>)
        )}
        <span>{errorMsg}</span>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  errorMsg: state.errorMsg,
  isLoading: state.isLoading,
  movies: state.movies
});

const mapDispatchProps = {
  getMovies
};

export const MyMoviesContainer = connect(
  mapStateToProps,
  mapDispatchProps
)(MyMovies);
