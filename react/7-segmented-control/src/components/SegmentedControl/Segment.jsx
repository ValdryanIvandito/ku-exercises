import React from "react";

// Segment is React Composition
export class Segment extends React.Component {
  render() {
    const className = ["segmented-control__segment"];

    if (this.props.selected)
      className.push("segmented-control__segment--selected");

    return (
      <button className={className.join(" ")} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
