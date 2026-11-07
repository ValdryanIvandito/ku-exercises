import React from "react";

export class CounterController extends React.Component {
  render() {
    return (
      <div>
        <div className="counter__controler">
          <button
            className="counter__btn-increment"
            onClick={this.props.onHandleIncrement}
          >
            +
          </button>

          <button 
            className="counter__btn-reset" 
            onClick={this.props.onHandleReset}
          >
            Reset
          </button>

          <button
            className="counter__btn-decrement"
            onClick={this.props.onHandleDecrement}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
