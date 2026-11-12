import React from "react";
import { WidgetStatsBar } from "./components/WidgetStatsBar/WidgetStatsBar";
import { InputControl } from "./components/InputControl/InputControl";
import { TaskList } from "./components/TaskList/TaskList";
import { SegmentedControl } from "@/components/SegmentedControl/SegmentedControl";

const StatusEnum = Object.freeze({
  ALL: 0,
  ACTIVE: 1,
  COMPLETED: 2,
});

const StatusLabel = {
  [StatusEnum.ALL]: "All",
  [StatusEnum.ACTIVE]: "Active",
  [StatusEnum.COMPLETED]: "Completed",
};

const statusList = [
  StatusLabel[StatusEnum.ALL],
  StatusLabel[StatusEnum.ACTIVE],
  StatusLabel[StatusEnum.COMPLETED],
];

export class HomePage extends React.Component {
  state = {
    selectedStatus: StatusEnum.ALL,
    numOfTask: 0,
    numOfActive: 0,
    numOfCompleted: 0,
    newTask: "",
    taskList: [],
  };

  handleAddNewTask = () => {
    if (!this.state.newTask) return;

    const timeStampMilis = Date.now();

    this.setState({
      taskList: [
        ...this.state.taskList,
        {
          id: timeStampMilis,
          name: this.state.newTask,
          isActive: true,
          createdAt: timeStampMilis,
          updateAt: null,
        },
      ],
      numOfTask: this.state.numOfTask + 1,
      numOfActive: this.state.numOfActive + 1,
      newTask: "",
    });
  };

  /**
   * @param {string} value
   */

  handleInputNewTask = (value) => {
    this.setState({ newTask: value });
  };

  /**
   * @param {number} index
   */

  handleSelectStatus = (index) => {
    this.setState({ selectedStatus: index });
  };

  /**
   * @param {number} selectedTaskId
   */

  handleDeleteTask = (selectedTaskId) => {
    this.state.taskList.map((task) => {
      if (task.id === Number(selectedTaskId)) {
        if (task.isActive) {
          this.setState({
            numOfTask: this.state.numOfTask - 1,
            numOfActive: this.state.numOfActive - 1,
            taskList: this.state.taskList.filter(
              (task) => task.id !== Number(selectedTaskId),
            ),
          });
        } else {
          this.setState({
            numOfTask: this.state.numOfTask - 1,
            numOfCompleted: this.state.numOfCompleted - 1,
            taskList: this.state.taskList.filter(
              (task) => task.id !== Number(selectedTaskId),
            ),
          });
        }
      }
    });
  };

  /**
   * @param {object} editedTask
   */

  handleEditTask = (editedTask) => {
    const updatedTaskList = this.state.taskList.map((task) => {
      if (task.id === Number(editedTask.id)) {
        return { ...task, name: editedTask.name };
      } else {
        return task;
      }
    });

    this.setState({
      taskList: updatedTaskList,
    });
  };

  /**
   * @param {number} selectedTaskId
   */

  handleCheckedTask = (selectedTaskId) => {
    const updatedTaskList = this.state.taskList.map((task) => {
      if (task.id === Number(selectedTaskId)) {
        this.setState({
          numOfActive: task.isActive
            ? this.state.numOfActive - 1
            : this.state.numOfActive + 1,
          numOfCompleted: task.isActive
            ? this.state.numOfCompleted + 1
            : this.state.numOfCompleted - 1,
        });

        return { ...task, isActive: !task.isActive };
      } else {
        return task;
      }
    });

    this.setState({
      taskList: updatedTaskList,
    });
  };

  render() {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <div className="w-125 rounded-3xl border-2 border-white">
          <section className="px-4.5 pt-4.5 pb-2.5">
            <WidgetStatsBar numOfTask={0} numOfActive={0} numOfCompleted={0} />
          </section>

          <section className="px-4.5 py-3">
            <InputControl
              value={this.state.newTask}
              onInputTask={this.handleInputNewTask}
              onAddTask={this.handleAddNewTask}
            />
          </section>

          <section className="px-2 pb-2">
            <div className="rounded-t-2xl border border-neutral-100 bg-white p-3">
              <SegmentedControl
                segments={statusList}
                selectedIndex={this.state.selectedStatus}
                onSelectSegment={this.handleSelectStatus}
              />
            </div>
            <div className="h-[359px] rounded-b-2xl border-x border-b border-neutral-100 bg-white p-3 overflow-y-auto">
              <TaskList
                statusEnum={StatusEnum}
                status={this.state.selectedStatus}
                data={this.state.taskList}
                onChecked={this.handleCheckedTask}
                onEdit={this.handleEditTask}
                onDelete={this.handleDeleteTask}
              />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
