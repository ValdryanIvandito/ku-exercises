import React from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import { TaskEmpty } from "../TaskEmpty/TaskEmpty";
import iconLayoutList from "@/assets/images/icon-layout-list-2.svg";

/**
 * @typedef {Object} TaskListProps
 * @prop {object} statusEnum
 * @prop {number} status
 * @prop {object[]} data
 * @prop {(selectedTaskId: number) => void} onChecked
 * @prop {(editedTask: object) => void} onEdit
 * @prop {(selectedTaskId: number) => void} onDelete
 */

/**
 * @extends {React.Component<TaskListProps>}
 */

export class TaskList extends React.Component {
  /**
   * @param {string} selectedTaskId
   */

  handleDeleteTask = (selectedTaskId) => {
    this.props.onDelete(selectedTaskId);
  };

  /**
   * @param {object} editedTask
   */

  handleEditTask = (editedTask) => {
    this.props.onEdit(editedTask);
  };

  /**
   * @param {string} selectedTaskId
   */

  handleCheckTask = (selectedTaskId) => {
    this.props.onChecked(selectedTaskId);
  };

  render() {
    let selectedTaskList = this.props.data;
    let emptyTaskTitle = "No tasks yet";
    let emptyTaskDesc =
      "Add your first task above to get started. Stay productive!";

    if (Number(this.props.status) === this.props.statusEnum.COMPLETED) {
      selectedTaskList = this.props.data.filter((task) => !task.isActive);
      emptyTaskTitle = "Completed task not found";
      emptyTaskDesc = "Carry out your tasks, your efforts will yield results!";
    }

    if (Number(this.props.status) === this.props.statusEnum.ACTIVE) {
      selectedTaskList = this.props.data.filter((task) => task.isActive);
    }

    if (selectedTaskList.length > 0) {
      return (
        <>
          {selectedTaskList.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                onChecked={this.handleCheckTask}
                onEdit={this.handleEditTask}
                onDelete={this.handleDeleteTask}
              />
            );
          })}
        </>
      );
    }

    return (
      <TaskEmpty
        icon={iconLayoutList}
        iconDesc="Icon Layout List"
        title={emptyTaskTitle}
        desc={emptyTaskDesc}
      />
    );
  }
}
