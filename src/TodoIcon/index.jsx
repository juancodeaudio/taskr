import React from "react";
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as TrashSVG } from "./trash.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => (
    <CheckSVG className="Icon-svg Icon-svg__check" stroke={color} />
  ),
  trash: (color) => (
    <TrashSVG className="Icon-svg Icon-svg__trash" stroke={color} />
  ),
};

function TodoIcon({ type, color = "gray", onClick, border = "red" }) {
  return (
    <span
      className={`Icon-container Icon-container__${type}`}
      onClick={onClick}
      style={{ borderColor: `${border}` }}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
