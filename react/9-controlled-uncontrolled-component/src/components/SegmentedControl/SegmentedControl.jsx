import React from "react";
import styles from "./SegmentedControl.module.css";

/**
 * @typedef {Object} SegmentedProps
 * @prop {string[]} segments
 * @prop {number} selectedIndex
 * @prop {(index: number) => void} onSelectSegment
 */

/**
 * @extends {React.Component<SegmentedProps>}
 */

export class SegmentedControl extends React.Component {
  /**
   * @param {React.MouseEvent<HTMLButtonElement>} event
   */

  handleClickSegment = (event) => {
    const index = Number(event.currentTarget.dataset.index);
    this.props.onSelectSegment(index);
  };

  render() {
    this.props.segments;

    return (
      <div className={styles.segmentedControl}>
        {this.props.segments.map((segment, index) => {
          let className = styles.segment;

          if (index === this.props.selectedIndex)
            className += ` ${styles.selectedSegment}`;

          return (
            <button
              key={index}
              className={className}
              onClick={this.handleClickSegment}
              data-index={index}
            >
              {segment}
            </button>
          );
        })}
      </div>
    );
  }
}
