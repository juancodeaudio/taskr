import React from "react";
import { TodoIcon } from "./";

function TrashIcon({ onDelete }) {
  return <TodoIcon type="trash" onClick={onDelete} />;
}

export { TrashIcon };
