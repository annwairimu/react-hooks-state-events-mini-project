import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = React.useState('');
  const [category, setCategory] = React.useState(categories && categories.length > 0 ? categories[0] : '');

  const handleSubmit = event => {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText('');
  };

  if (!categories || categories.length === 0) {
    return <p>No categories available</p>;
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={event => setText(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={event => setCategory(event.target.value)}>
          {categories.filter(category => category !== 'All').map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
