import React from "react";
import { ButtonIcon } from "@/components/ButtonIcon/ButtonIcon";
import iconCheckbox from "@/assets/images/icon-checkbox.svg";
import iconCheckboxChecked from "@/assets/images/icon-checkbox-checked.svg";
import iconSquarePen from "@/assets/images/icon-square-pen.svg";
import iconTrash from "@/assets/images/icon-trash.svg";

/**
 * @typedef {Object} TaskItemProps
 * @prop {object} task
 * @prop {(selectedTaskId: number) => void} onChecked
 * @prop {(editedTask: object) => void} onEdit
 * @prop {(selectedTaskId: number) => void} onDelete
 */

/**
 * @extends {React.Component<TaskItemProps>}
 */

export class TaskItem extends React.Component {
  handleChecked = () => {
    this.props.onChecked(this.props.task.id);
  };

  handleEdit = () => {
    this.props.onEdit(this.props.task);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.task.id);
  };

  render() {
    return (
      <div className="flex items-center justify-between rounded-xl border border-neutral-100 p-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="cursor-pointer bg-transparent"
            onClick={this.handleChecked}
          >
            <img
              src={
                this.props.task.isActive ? iconCheckbox : iconCheckboxChecked
              }
              alt="Icon Checkbox"
            />
          </button>
          <span className={this.props.task.isActive ? "" : "line-through"}>
            {this.props.task.name}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <ButtonIcon
            icon={iconSquarePen}
            iconDesc="Icon Square Pen"
            onClick={this.handleEdit}
          />
          <ButtonIcon
            icon={iconTrash}
            iconDesc="Icon Trash"
            onClick={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}
