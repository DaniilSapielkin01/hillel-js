import React, { Component } from "react";
import { Button } from "./Button";

class ButtonCounter extends React.Component {
  state = {
    counter: 0
  };

  handleBtnClick = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };
  render() {
    return (
      <div>
        <Button
          onClick={() => {}}
          text={`You are clicked ${this.state.counter} times`}
        />
      </div>
    );
  }
}

export default ButtonCounter;
