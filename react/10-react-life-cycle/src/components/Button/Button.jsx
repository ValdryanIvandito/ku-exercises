import React from "react";
import styles from "./Button.module.css";

export class Button extends React.Component {
  render() {
    return (
      <button className={styles.button} {...this.props}>
        {this.props.children}
      </button>
    );
  }
}
