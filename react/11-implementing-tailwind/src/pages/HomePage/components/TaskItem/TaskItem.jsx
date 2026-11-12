import React from "react";
import { cn } from "@/utils/ui";
import { ButtonIcon } from "@/components/ButtonIcon/ButtonIcon";
import iconSquarePen from "@/assets/images/icon-square-pen.svg";
import iconTrash from "@/assets/images/icon-trash.svg";
import iconConfirm from "@/assets/images/icon-confirm.svg";
import iconCancel from "@/assets/images/icon-cancel.svg";

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
  state = {
    toggleView: false,
    isEdit: false,
    isDelete: false,
    editedTaskName: this.props.task.name,
  };

  clearState = () => {
    this.setState({
      toggleView: false,
      isEdit: false,
      isDelete: false,
    });
  };

  /**
   * @param {number} selectedTaskId
   */

  handleConfirmAction = (selectedTaskId) => {
    if (this.state.isEdit) {
      const editedTask = {
        id: selectedTaskId,
        name: this.state.editedTaskName,
      };
      this.props.onEdit(editedTask);
      this.clearState();
    } else if (this.state.isDelete) {
      this.props.onDelete(selectedTaskId);
      this.clearState();
    }
  };

  handleCancelAction = () => {
    this.clearState();
  };

  handleTriggerDeleteTask = () => {
    this.setState({ toggleView: true, isDelete: true });
  };

  handleTriggerEditTask = () => {
    this.setState({
      toggleView: true,
      isEdit: true,
      editedTaskName: this.props.task.name,
    });
  };

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */

  handleChangeTaskName = (event) => {
    this.setState({ editedTaskName: event.target.value });
  };

  /**
   * @param {React.MouseEvent<HTMLButtonElement>} event
   */

  handleCheckTask = (event) => {
    this.props.onChecked(event.currentTarget.dataset.index);
  };

  render() {
    return (
      <div
        className={cn(
          "mb-2.5 flex items-center justify-between gap-3 rounded-lg border border-neutral-100 p-4.5 leading-none",
          !this.props.task.isActive && "bg-surface-muted",
        )}
      >
        <div className="flex w-full items-center gap-3">
          <checkbox
            className={cn(
              "h-5 w-5 cursor-pointer rounded-md",
              this.props.task.isActive
                ? "border border-gray-300"
                : "border-accent-blue border bg-[url('./assets/images/icon-checkbox-checked.svg')] bg-center bg-no-repeat",
            )}
            data-index={this.props.task.id}
            onClick={this.handleCheckTask}
          ></checkbox>
          {this.state.toggleView && this.state.isEdit ? (
            <input
              className="border-accent-blue rounded-lg border px-2 py-1"
              type="text"
              value={this.state.editedTaskName}
              onChange={this.handleChangeTaskName}
            />
          ) : (
            <p className={cn(!this.props.task.isActive && "line-through")}>
              {this.props.task.name}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center gap-1">
          {this.state.toggleView ? (
            <>
              <ButtonIcon
                icon={iconConfirm}
                iconDesc="Icon Confirm"
                dataIndex={this.props.task.id}
                onClick={this.handleConfirmAction}
              />
              <ButtonIcon
                icon={iconCancel}
                iconDesc="Icon Cancel"
                onClick={this.handleCancelAction}
              />
            </>
          ) : (
            <>
              <ButtonIcon
                icon={iconSquarePen}
                iconDesc="Icon Square Pen"
                onClick={this.handleTriggerEditTask}
              />
              <ButtonIcon
                icon={iconTrash}
                iconDesc="Icon Trash"
                onClick={this.handleTriggerDeleteTask}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}
