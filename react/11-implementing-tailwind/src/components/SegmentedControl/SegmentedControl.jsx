import React from "react";

/**
 * @typedef {Object} SegmentedControlProps
 * @prop {string[]} segments
 * @prop {number} selectedIndex
 * @prop {(index: number) => void} onSelectSegment
 */

/**
 * @extends {React.Component<SegmentedControlProps>}
 */

export class SegmentedControl extends React.Component {
  /**
   * @param {React.MouseEvent<HTMLButtonElement>} event
   */

  handleClickSegment = (event) => {
    this.props.onSelectSegment(event.currentTarget.dataset.index);
  };

  render() {
    this.props.segments;

    return (
      <div className="bg-canvas flex w-59 items-center justify-center rounded-lg border-black p-1">
        {this.props.segments.map((segment, index) => {
          let segmentStyle =
            "bg-canvas rounded-md cursor-pointer px-3.5 py-1.25 font-medium text-neutral-400";

          if (index === Number(this.props.selectedIndex))
            segmentStyle += ` text-neutral-900 bg-white drop-shadow-soft`;

          return (
            <button
              key={index}
              className={segmentStyle}
              data-index={index}
              onClick={this.handleClickSegment}
            >
              {segment}
            </button>
          );
        })}
      </div>
    );
  }
}
