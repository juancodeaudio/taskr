import React from "react";
import "./HideShowTodos.css";

function HideShowTodos(params) {
  return (
    <div className="HideShow-container">
      <span>o</span>
      <button className="HideTodos">Hide completed tasks</button>
    </div>
  );
}

export { HideShowTodos };
