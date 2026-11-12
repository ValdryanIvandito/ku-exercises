import React from "react";

/**
 * @typedef {Object} WidgetStatsProps
 * @property {string} icon
 * @property {string} label
 * @property {number} value
 * @property {string} textColor
 * @property {string} bgColor
 */

/**
 * @extends {React.Component<WidgetStatsProps>}
 */

export class WidgetStats extends React.Component {
  render() {
    return (
      <div
        className={`w-full rounded-xl p-3 font-semibold ${this.props.textColor} ${this.props.bgColor}`}
      >
        {this.props.icon}
        <div className="flex items-end justify-between">
          <span className="text-sm">{this.props.label}</span>
          <span className="text-[40px] leading-10">{this.props.value}</span>
        </div>
      </div>
    );
  }
}
