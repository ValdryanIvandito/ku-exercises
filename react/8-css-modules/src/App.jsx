import React from "react";
import { ProductCard } from "./ProductCard";
import { FeatureCard } from "./FeatureCard";

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ProductCard />
        <FeatureCard />
      </div>
    );
  }
}
