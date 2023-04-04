import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { TrashIcon } from "../TodoIcon/TrashIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/* <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        ✔
      </span> */}
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <TrashIcon onDelete={props.onDelete} />
      {/* <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span> */}
    </li>
  );
}

export { TodoItem };
