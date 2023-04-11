import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { EditIcon } from "../TodoIcon/EditIcon";
import { TrashIcon } from "../TodoIcon/TrashIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
        themeColor={props.themeColor}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <EditIcon onEdit={props.onEdit} themeColor={props.themeColor} />
      <TrashIcon onDelete={props.onDelete} themeColor={props.themeColor} />
    </li>
  );
}

export { TodoItem };
