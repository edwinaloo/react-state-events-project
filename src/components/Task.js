// Task.js

import React from "react";

function Task({ task, onDelete }) {
  const { text, category } = task;

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div>
      <p>{text}</p>
      <p>{category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;

