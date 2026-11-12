import React from "react";
import { WidgetStats } from "@/components/WidgetStats/WidgetStats";
import { bgColor, textColor } from "./WidgetStatsColorVariants";

import {
  IconClipboardList,
  IconLayoutList,
  IconSquareCheck,
} from "@/components/Icon";

/**
 * @typedef {Object} WidgetStatsBarProps
 * @property {number} numOfTask
 * @property {number} numOfActive
 * @property {number} numOfCompleted
 */

/**
 * @extends {React.Component<WidgetStatsBarProps>}
 */

export class WidgetStatsBar extends React.Component {
  render() {
    const rootStyles = window.getComputedStyle(document.documentElement);

    const purpleForegroundColor = rootStyles.getPropertyValue(
      "--color-purple-foreground",
    );
    const blueForegroundColor = rootStyles.getPropertyValue(
      "--color-blue-foreground",
    );
    const greenForegroundColor = rootStyles.getPropertyValue(
      "--color-green-foreground",
    );

    const iconClipboardList = (
      <IconClipboardList color={purpleForegroundColor} />
    );
    const iconLayoutList = <IconLayoutList color={blueForegroundColor} />;
    const iconSquareCheck = <IconSquareCheck color={greenForegroundColor} />;

    return (
      <>
        <h1 className="mb-4.5 text-2xl font-semibold">Todolist</h1>
        <div className="flex items-center justify-center gap-1.5">
          <WidgetStats
            icon={iconClipboardList}
            label="Task"
            value={this.props.numOfTask}
            textColor={textColor.purple}
            bgColor={bgColor.purple}
          />
          <WidgetStats
            icon={iconLayoutList}
            label="Active"
            value={this.props.numOfActive}
            textColor={textColor.blue}
            bgColor={bgColor.blue}
          />
          <WidgetStats
            icon={iconSquareCheck}
            label="Completed"
            value={this.props.numOfCompleted}
            textColor={textColor.green}
            bgColor={bgColor.green}
          />
        </div>
      </>
    );
  }
}
