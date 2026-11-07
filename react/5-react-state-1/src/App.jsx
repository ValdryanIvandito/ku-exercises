import React from "react";
import { Counter } from "./components/Counter";

export default class App extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Counter label="orange" step={1} />
        <Counter label="manggo" step={5} />
      </div>
    );
  }
}
