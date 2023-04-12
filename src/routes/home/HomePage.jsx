import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../useTodos";
import { Menu } from "../../ui/Menu";
import { TodoHeader } from "../../ui/TodoHeader";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { HideShowTodos } from "../../ui/HideShowTodos";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { TodosError } from "../../ui/TodosError";
import { TodosLoading } from "../../ui/TodosLoading";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { EmptySearch } from "../../ui/EmptySearch";
import { Modal } from "../../ui/Modal";
import { ChangeAlert } from "../../ui/ChangeAlert";
import "../App.css";

function HomePage() {
  const navigate = useNavigate();
  const { states, stateUpdaters } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    themeColor,
    searchedTodos,
    // openModal,
  } = states;

  const {
    setSearchValue,
    changeTheme,
    // addTodo,
    completeTodo,
    deleteTodo,
    // setOpenModal,
    synchronizeTodos,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <Menu changeTheme={changeTheme} />
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
          <HideShowTodos />
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
            <EmptySearch searchText={searchText} />
          )}
          render={(todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.id)}
              onEdit={() => {
                navigate("/edit/" + todo.id, {
                  state: { todo },
                });
              }}
              onDelete={() => deleteTodo(todo.id)}
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

        {/* {!!openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        )} */}

        <CreateTodoButton
          onClick={() => navigate("/new")}
          // setOpenModal={setOpenModal}
        />

        <ChangeAlert synchronize={synchronizeTodos} />
      </section>
    </React.Fragment>
  );
}

export { HomePage };
