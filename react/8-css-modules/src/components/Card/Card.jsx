import React from "react";
import style from "./Card.module.css";

export class Card extends React.Component {
  render() {
    return <div className={style.card}>{this.props.children}</div>;
  }
}
