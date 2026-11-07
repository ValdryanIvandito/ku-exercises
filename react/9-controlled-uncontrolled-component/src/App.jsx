import React from "react";
import { SegmentedControl } from "./components/SegmentedControl";

const Status = Object.freeze({
  ALL: 0,
  ACTIVE: 1,
  COMPLETED: 2,
});

const StatusLabel = {
  [Status.ALL]: "All",
  [Status.ACTIVE]: "Active",
  [Status.COMPLETED]: "Completed",
};

const statuses = [
  StatusLabel[Status.ALL],
  StatusLabel[Status.ACTIVE],
  StatusLabel[Status.COMPLETED],
];

export class App extends React.Component {
  state = {
    selectedStatusIndex: 0,
  };

  /**
   * @param {number} index
   */

  handleSelectStatusSegment = (index) => {
    this.setState({ selectedStatusIndex: index });
  };

  render() {
    return (
      <div>
        <SegmentedControl
          segments={statuses}
          selectedIndex={this.state.selectedStatusIndex}
          onSelectSegment={this.handleSelectStatusSegment}
        />
      </div>
    );
  }
}
