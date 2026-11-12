import React from "react";

/**
 * @typedef {Object} TaskEmptyProps
 * @prop {string} icon
 * @prop {string} iconDesc
 * @prop {string} title
 * @prop {string} desc
 */

/**
 * @extends {React.Component<TaskEmptyProps>}
 */

export class TaskEmpty extends React.Component {
  render() {
    return (
      <div className="flex h-full flex-col items-center justify-center py-12 text-center">
        <img src={this.props.icon} alt={this.props.iconDesc} />
        <h3 className="mt-3 font-semibold text-neutral-900">
          {this.props.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-400">{this.props.desc}</p>
      </div>
    );
  }
}
