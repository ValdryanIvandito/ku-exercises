import React from "react";
import { formatDuration } from "../utils/formatDuration";

/**
 * @typedef {Object} TimerProps
 * @property {string} label
 * @property {number} duration
 */

/**
 * @extends {React.Component<TimerProps>}
 */

export class TimerClass extends React.Component {
  state = {
    remainingDuration: this.props.duration,
  };

  constructor(props) {
    super(props);
    this._endMs = Date.now() + this.props.duration;
  }

  componentDidMount() {
    this._handle = setInterval(() => {
      const remainingDuration = Math.max(0, this._endMs - Date.now());

      this.setState({ remainingDuration: remainingDuration });

      if (remainingDuration <= 0) clearInterval(this._handle);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._handle);
  }

  render() {
    return (
      <div>
        <p>{this.props.label}</p>
        <h3>{formatDuration(this.state.remainingDuration)}</h3>
      </div>
    );
  }
}
