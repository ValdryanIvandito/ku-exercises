import React from "react";
import { Card } from "../components/Card";
import style from "./ProductCard.module.css";

export class ProductCard extends React.Component {
  render() {
    return (
      <Card>
        <h1 className={style.title}>AMD Ryzen 7 8700G</h1>
        <p className={style.description}>
          The AMD Ryzen 7 8700G is an all-in-one desktop processor (APU) built
          on the Zen 4 architecture with powerful integrated graphics.
        </p>
      </Card>
    );
  }
}
