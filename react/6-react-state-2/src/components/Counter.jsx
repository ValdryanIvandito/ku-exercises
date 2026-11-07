import React from "react";
import { CounterController } from "./CounterController";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleReset() {
    console.log("Reset clicked");
    this.setState({ count: 0 });
  }

  handleIncrement() {
    console.log("increment clicked");
    this.setState({ count: this.state.count + this.props.step });
  }

  handleDecrement() {
    console.log("decrement clicked");

    if (this.state.count === 0) return;

    this.setState({ count: this.state.count - this.props.step });
  }

  render() {
    return (
      <div className="counter">
        <h3 className="counter__label">{this.props.label.toUpperCase()}</h3>
        <p className="counter__value">{this.state.count}</p>

        <CounterController 
          onHandleReset = {this.handleReset}
          onHandleIncrement = {this.handleIncrement}
          onHandleDecrement = {this.handleDecrement}
        />
      </div>
    );
  }
}
