import React from "react";
import { Product } from "./components/Product";

export class App extends React.Component {
  render() {
    const products = [
      { id: 1, name: "Nasi Goreng", price: 18000, soldOut: false },
      { id: 2, name: "Mie Goreng", price: 19000, soldOut: false },
      { id: 3, name: "Kwetiau Goreng", price: 20000, soldOut: true },
    ];

    return (
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            soldOut={product.soldOut}
          />
        ))}
      </div>
    );
  }
}
