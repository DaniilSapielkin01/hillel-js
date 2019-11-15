import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./Hello";
import ButtonCounter from "./ButtonCounter";
import { Main } from "./MyComponents";

//---
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonCounter />
        <Hello />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Main />
      </header>
    </div>
  );
}

export default App;
