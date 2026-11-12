import React from "react";
import { cn } from "@/utils/ui";

/**
 * @typedef {Object} Segment
 * @property {string} value
 * @property {string} label
 */

/**
 * @typedef {Object} SegmentedControlProps
 * @prop {Segment[]} segments
 * @prop {string} value
 * @prop {(index: number) => void} onSelectSegment
 */

/**
 * @extends {React.Component<SegmentedControlProps>}
 */

export class SegmentedControl extends React.Component {
  render() {
    this.props.segments;

    return (
      <div className="bg-surface-muted text-placeholder inline-flex w-fit items-center justify-center rounded-lg p-1 text-base font-medium">
        {this.props.segments.map((segment) => {
          return (
            <button
              key={segment.value}
              className={cn("rounded-md border-0 px-3.5 py-1.25", {
                "bg-white": segment.value === this.props.value,
                "text-neutral-900": segment.value === this.props.value,
              })}
              onClick={() => this.props.onSelectSegment(segment)}
            >
              {segment.label}
            </button>
          );
        })}
      </div>
    );
  }
}
