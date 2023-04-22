// CategoryFilter.js

import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  const handleClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

