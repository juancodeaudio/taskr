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

  const [searchValue, setSearchValue] = React.useState("");
  const [isHidden, setIsHidden] = React.useState(false);
  // const [openModal, setOpenModal] = React.useState(false);

  const uncompletedTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    isHidden ? (searchedTodos = uncompletedTodos) : (searchedTodos = todos);
  } else {
    let filteredTodos = [];
    isHidden ? (filteredTodos = uncompletedTodos) : (filteredTodos = todos);
    searchedTodos = filteredTodos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const [themeColor, setThemeColor] = React.useState(
    localStorage.getItem("themeColor") || "dark"
  );

  const changeTheme = () => {
    if (themeColor === "light") {
      setThemeColor("dark");
    } else {
      setThemeColor("light");
    }
  };

  React.useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
    document.documentElement.setAttribute("data-theme", themeColor);
  }, [themeColor]);

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
    isHidden,
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
    setIsHidden,
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
