import React from "react";
import "./HideShowTodos.css";
import { HideIcon } from "../TodoIcon/HideIcon";
import { ShowIcon } from "../TodoIcon/ShowIcon";

function HideShowTodos({ isHidden, setIsHidden }) {
  return (
    <div className="HideShow-container">
      <button className="HideTodos" onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? <ShowIcon /> : <HideIcon />}
        {isHidden ? "Show" : "Hide"} completed tasks
      </button>
    </div>
  );
}

export { HideShowTodos };
