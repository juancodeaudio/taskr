import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="todoList-container">
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
