import React from "react";
import { Product } from "./components/Product";

export class App extends React.Component {
  render() {
    return (
      <div className="product-list">
        <Product 
          title="Nasi Goreng" 
          price={18000} 
          soldOut
        />

        <Product 
          title="Mie Goreng" 
          price={19000} 
        />

        <Product 
          title="Kwetiau" 
          price={19500} 
        />
      </div>
    );
  }
}
