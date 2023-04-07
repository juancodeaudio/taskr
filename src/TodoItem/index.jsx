import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { TrashIcon } from "../TodoIcon/TrashIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <TrashIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
