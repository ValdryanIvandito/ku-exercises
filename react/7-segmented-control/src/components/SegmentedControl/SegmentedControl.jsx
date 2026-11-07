import React from "react";
import { Segment } from "./segment";

export class SegmentedControl extends React.Component {
  handleClickSegment(index) {
    this.props.onChange(index);
  }

  render() {
    return (
      <div className="segmented-control">
        {this.props.segments.map((segment, index) => (
          // Segment is React Composition
          <Segment
            selected={index === this.props.selectedIndex}
            key={index}
            onClick={() => {
              this.handleClickSegment(index);
            }}
          >
            {segment}
          </Segment>
        ))}
      </div>
    );
  }
}
