import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    synchronizeItem: synchronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);

  const [themeColor, setThemeColor] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  // const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const changeTheme = () => {
    if (themeColor) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    setThemeColor(!themeColor);
  };

  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id,
    });
    saveTodos(newTodos);
  };

  const getTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    return todos[todoIndex];
  };

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    themeColor,
    searchedTodos,
    getTodo,
    // openModal,
  };

  const stateUpdaters = {
    setSearchValue,
    changeTheme,
    addTodo,
    completeTodo,
    editTodo,
    deleteTodo,
    // setOpenModal,
    synchronizeTodos,
  };

  return { states, stateUpdaters };
}

function newTodoId(todoList) {
  if (!todoList.length) {
    return 1;
  }

  const idList = todoList.map((todo) => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}

export { useTodos };
