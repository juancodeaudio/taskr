import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      Completed {completedTodos} of {totalTodos}
    </h2>
  );
}

export { TodoCounter };
