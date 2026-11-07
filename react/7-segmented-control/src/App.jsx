import React from "react";
import { SegmentedControl } from "./components/SegmentedControl";

const Status = Object.freeze({
  ALL: 0,
  ACTIVE: 1,
  COMPLETED: 2,
});

export class App extends React.Component {
  state = {
    selectedStatus: Status.ALL,
  };

  render() {
    let paragraph;

    switch (this.state.selectedStatus) {
      case Status.ALL:
        paragraph = <p>All Page</p>;
        break;
      case Status.ACTIVE:
        paragraph = <p>Active Page</p>;
        break;
      case Status.COMPLETED:
        paragraph = <p>Completed Page</p>;
        break;
    }

    return (
      <div>
        <SegmentedControl
          selectedIndex={this.state.selectedStatus}
          segments={["All", "Active", "Completed"]}
          onChange={(index) => {
            this.setState({ selectedStatus: index });
          }}
        />

        {/* {this.state.selectedStatus === Status.ALL && <p>All Page</p>}
        {this.state.selectedStatus === Status.ACTIVE && <p>Active Page</p>}
        {this.state.selectedStatus === Status.COMPLETED && (
          <p>Completed Page</p>
        )} */}

        {paragraph}
      </div>
    );
  }
}
