import React from "react";
import "./EmptyTodos.css";

function EmptyTodos() {
  return (
    <div className="emptyTodo-container">
      <div className="emptyTodo-image"></div>
      <h3>Oh! Nothing added yet</h3>
      <p>Try adding a new task...</p>
    </div>
  );
}

export { EmptyTodos };
