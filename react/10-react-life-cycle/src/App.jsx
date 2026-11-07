import React from "react";
import { Timer } from "./Timer";

export class App extends React.Component {
  state = {
    shouldShowTimer: true,
  };

  handleClickRemoveButton = () => {
    this.setState({ shouldShowTimer: !this.state.shouldShowTimer });
  };

  render() {
    return (
      <div>
        {this.state.shouldShowTimer && <Timer />}
        <button onClick={this.handleClickRemoveButton}>Toggle</button>
      </div>
    );
  }
}
