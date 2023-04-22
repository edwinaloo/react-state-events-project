// App.js

import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Build a Webpage for my Game", category: "Work" },
    { id: 2, text: "Play Games", category: "Personal" },
    { id: 3, text: "Mentor students", category: "Work" },
    { id: 4, text: "Rest", category: "Personal" },
  ]);

  const categories = [...new Set(tasks.map((task) => task.category))];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

