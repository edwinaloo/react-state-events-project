import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} description={task.description} />
      ))}
    </div>
  );
}

export default TaskList;

