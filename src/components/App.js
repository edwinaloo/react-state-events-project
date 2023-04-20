import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setTasks(filteredTasks);
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={[...CATEGORIES, "All"]}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
