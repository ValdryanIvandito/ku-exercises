import React from "react";

/**
 * @typedef {Object} ButtonIconProps
 * @prop {string} icon
 * @prop {string} iconDesc
 * @prop {number} dataIndex
 * @prop {(value) => void} onClick
 */

/**
 * @extends {React.Component<ButtonIconProps>}
 */

export class ButtonIcon extends React.Component {
  /**
   * @param {React.MouseEvent<HTMLButtonElement>} event
   */

  handleClick = (event) => {
    this.props.onClick(event.currentTarget.dataset.index);
  };

  render() {
    return (
      <button
        className="cursor-pointer bg-transparent"
        data-index={this.props.dataIndex}
        onClick={this.handleClick}
      >
        <img src={this.props.icon} alt={this.props.iconDesc} />
      </button>
    );
  }
}
