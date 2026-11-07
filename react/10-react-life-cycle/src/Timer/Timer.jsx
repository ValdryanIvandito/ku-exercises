import React from "react";
import styles from "./Timer.module.css";
import { Button } from "../components/Button";

export class Timer extends React.Component {
  state = { value: 0 };

  // ============== React Life Cycle ============== //

  // Method ini dipanggil setelah commit phase pada lifecycle mount
  componentDidMount() {
    console.log("component did mount is called");
    this.startTimer();
  }

  componentDidUpdate() {
    console.log("component did update is called");
  }

  componentWillUnmount() {
    console.log("component will unmount is called");
    this.stopTimer();
  }

  startTimer() {
    this.intervalHandle = setInterval(() => {
      console.log("Inverval Called");
      this.setState({ value: this.state.value + 1 });
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalHandle);
  }

  handleClickResetButton = () => {
    this.setState({ value: 0 });
    this.stopTimer();
    this.startTimer();
  };

  // ============================================== //

  render() {
    return (
      <div className={styles.timer}>
        <p className={styles.value}>{this.state.value}</p>
        <Button onClick={this.handleClickResetButton}>Reset</Button>
      </div>
    );
  }
}
