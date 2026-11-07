import React from "react";
import { Card } from "../components/Card";
import style from "./FeatureCard.module.css";

export class FeatureCard extends React.Component {
  render() {
    return (
      <Card>
        <h1 className={style.title}>Spesifications</h1>
        <ul className={style.description}>
          <li>CPU Cores / Threads: 8 cores and 16 threads</li>
          <li>Clocks: 4.2 GHz base clock and up to 5.1 GHz boost clock</li>
          <li>
            Integrated Graphics: AMD Radeon 780M with 12 compute units running
            up to 2900 MHz
          </li>
        </ul>
      </Card>
    );
  }
}
