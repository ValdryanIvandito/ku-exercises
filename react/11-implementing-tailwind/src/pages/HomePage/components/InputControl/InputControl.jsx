import React from "react";
import { cn } from "@/utils/ui";
import { IconPlus } from "@/components/Icon";
import iconPenLine from "@/assets/images/icon-pen-line.svg";

/**
 * @typedef {Object} InputControlProps
 * @prop {string} value
 * @prop {(value: string) => void} onInputTask
 * @prop {() => void} onAddTask
 */

/**
 * @extends {React.Component<InputControlProps>}
 */

export class InputControl extends React.Component {
  /**
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */

  handleInputTask = (event) => {
    this.props.onInputTask(event.target.value);
  };

  /**
   * @param {React.KeyboardEvent<HTMLInputElement>} event
   */

  handleKeyDownAddTask = (event) => {
    if (event.key === "Enter") {
      this.props.onAddTask();
    }
  };

  handleAddTask = () => {
    this.props.onAddTask();
  };

  render() {
    const rootStyles = window.getComputedStyle(document.documentElement);
    const iconPlusActive = rootStyles.getPropertyValue("--color-neutral-200");
    const iconPlusDisable = rootStyles.getPropertyValue("--color-white");

    return (
      <div className="flex items-center justify-between">
        <div className="flex w-full items-center gap-3">
          <img src={iconPenLine} alt="Icon Pen Line" />
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Add a new task..."
            value={this.props.value}
            onChange={this.handleInputTask}
            onKeyDown={this.handleKeyDownAddTask}
          />
        </div>

        <button
          className={cn(
            "flex items-center justify-center rounded-lg px-2.5 py-1.5",
            this.props.value
              ? "bg-ink text-white"
              : "shadow-soft text-neutral-200",
          )}
          type="button"
          disabled={!this.props.value}
          onClick={this.handleAddTask}
        >
          <IconPlus
            color={!this.props.value ? iconPlusActive : iconPlusDisable}
          />
          Add
        </button>
      </div>
    );
  }
}
