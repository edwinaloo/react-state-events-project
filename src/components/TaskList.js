// TaskList.js

import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

