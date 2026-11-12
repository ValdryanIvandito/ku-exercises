import React from "react";
import { cn } from "@/utils/ui";

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
      <div className="bg-canvas flex-inline w-fit items-center justify-center rounded-lg border-black p-1">
        {this.props.segments.map((segment, index) => {
          return (
            <button
              key={index}
              className={cn(
                "bg-canvas cursor-pointer rounded-md px-3.5 py-1.25 font-medium text-neutral-400",
                index === Number(this.props.selectedIndex) &&
                  "drop-shadow-soft bg-white text-neutral-900",
              )}
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
