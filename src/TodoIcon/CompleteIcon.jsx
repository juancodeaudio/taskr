import React from "react";
import { TodoIcon } from "./";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "#6d6b72" : "#272c34"}
      onClick={onComplete}
      border={completed ? "#6d6b72" : "#6fe4b1"}
      completed={completed}
    />
  );
}

export { CompleteIcon };
