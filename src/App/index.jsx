import React from "react";
import { ThemeColor } from "../ThemeColor";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { ChangeAlert } from "../ChangeAlert";
import "./App.css";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    themeColor,
    themeChange,
    addTodo,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    synchronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <ThemeColor themeChange={themeChange} />
      <section className="image-section">
        <p>Make</p>
        <p>THE BEST</p>
        <p>out of your time!</p>
        <div className="emptyTodo-image"></div>
      </section>
      <section className="main-section">
        <TodoHeader>
          <h1>Taskr</h1>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            loading={loading}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
          />
        </TodoHeader>

        <TodoList
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={(searchText) => (
            <p>No hay resultados para {searchText}</p>
          )}
          render={(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              themeColor={themeColor}
            />
          )}
        >
          {/* {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        )}

        <CreateTodoButton setOpenModal={setOpenModal} />

        <ChangeAlert synchronize={synchronizeTodos} />
      </section>
    </React.Fragment>
  );
}

export default App;
