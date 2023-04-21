import React from "react";

function Task({ category, text, onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
}

export default Task;

