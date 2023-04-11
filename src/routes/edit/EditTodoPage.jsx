import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);

  const { states, stateUpdaters } = useTodos();
  const { loading, getTodo } = states;
  const { editTodo } = stateUpdaters;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>;
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  return (
    <TodoForm
      label="Edit your Task"
      defaultTodoText={todoText}
      submitText="Save"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };
