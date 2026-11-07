import React from "react";

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

        <div className="counter__controler">
          <button
            className="counter__btn-increment"
            onClick={this.handleIncrement}
          >
            +
          </button>

          <button className="counter__btn-reset" onClick={this.handleReset}>
            Reset
          </button>

          <button
            className="counter__btn-decrement"
            onClick={this.handleDecrement}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
