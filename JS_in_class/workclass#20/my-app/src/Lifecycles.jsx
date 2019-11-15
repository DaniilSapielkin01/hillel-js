import React from "react";

export class LifeCycles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  handleClick = () => {
    this.setState = prevState => ({ counter: prevState.counter + 1 });
  };

  render() {
    const { counter } = this.state;
    console.log("render");
    return (
      <div>
        <span>{counter}</span>
        <button>{this.handleClick}Add+</button>
      </div>
    );
  }
}
