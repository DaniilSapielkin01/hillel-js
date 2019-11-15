import React from "react";
import { connect } from "react-redux";
import { actionDec, actionInc, toggleLoading } from ".././actions/index";

const Counter = props => {
  return (
    <div>
      <h2>{props.isLoading.toString}</h2>
      <button onClick={props.toggleLoading}>Loading</button>
      <div>
        <button onClick={props.actionInc}>+</button>
        <span>{props.counter}</span>
        <button onClick={props.actionDec}>-</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.loadingReducer.isLoading,
  counter: state.countReducer.count
});

const mapDispatchToProps = {
  actionDec,
  actionInc,
  toggleLoading
};

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
