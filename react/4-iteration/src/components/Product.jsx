import React from "react";
import { Badge } from "./Badge";

export class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h3>
          <span>{this.props.id}. </span>
          {this.props.name}
        </h3>
        <p>{this.props.price}</p>
        {this.props.soldOut && <Badge>Sold Out</Badge>}
      </div>
    );
  }
}
