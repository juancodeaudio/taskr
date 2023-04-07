import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>New Task</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="New amazing task..."
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button__cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="Submit" className="TodoForm-button TodoForm-button__add">
          Create
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
