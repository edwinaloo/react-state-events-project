import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText('');
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Task:</label>
      <input id="text" type="text" value={text} onChange={handleTextChange} />
      <label htmlFor="category">Category:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        {categories.slice(1).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;

