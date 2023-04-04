import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div>
      <div className="LoadingTodo-container">
        <p className="LoadingTodo-text">Loading...</p>
      </div>
      <div className="LoadingTodo-container">
        <p className="LoadingTodo-text">Loading...</p>
      </div>
      <div className="LoadingTodo-container">
        <p className="LoadingTodo-text">Loading...</p>
      </div>
    </div>
  );
}

export { TodosLoading };
