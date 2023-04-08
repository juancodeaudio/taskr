import React from "react";
import { TodoIcon } from "./";

function CompleteIcon({ completed, onComplete, themeColor }) {
  if (themeColor) {
    const checkColor = "#4ea37e";
    const neutralColor = "#8e8b94";
    return (
      <TodoIcon
        type={completed ? "uncheck" : "check"}
        // type="check"
        color={completed ? neutralColor : "transparent"}
        onClick={onComplete}
        border={completed ? neutralColor : checkColor}
        completed={completed}
      />
    );
  } else {
    const checkColor = "#6fe4b1";
    const neutralColor = "#6d6b72";
    return (
      <TodoIcon
        type={completed ? "uncheck" : "check"}
        color={completed ? neutralColor : "transparent"}
        onClick={onComplete}
        border={completed ? neutralColor : checkColor}
        completed={completed}
      />
    );
  }
}

export { CompleteIcon };
