import React from "react";

function Task({ category, description }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{description}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
