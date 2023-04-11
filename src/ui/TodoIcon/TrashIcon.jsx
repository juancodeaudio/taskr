import React from "react";
import { TodoIcon } from "./";

function TrashIcon({ onDelete, themeColor }) {
  return <TodoIcon type="trash" onClick={onDelete} />;
}

export { TrashIcon };
