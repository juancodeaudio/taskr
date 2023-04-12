import React from "react";
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as UncheckSVG } from "./uncheck.svg";
import { ReactComponent as TrashSVG } from "./trash.svg";
import { ReactComponent as EditSVG } from "./edit.svg";
import { ReactComponent as HideSVG } from "./eye-off.svg";
import { ReactComponent as ShowSVG } from "./eye.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => (
    <CheckSVG className="Icon-svg Icon-svg__check" stroke={color} />
  ),
  uncheck: (color, hover) =>
    hover ? (
      <UncheckSVG className="Icon-svg Icon-svg__uncheck" stroke={color} />
    ) : (
      <CheckSVG className="Icon-svg Icon-svg__check" stroke={color} />
    ),
  edit: (color) => (
    <EditSVG className="Icon-svg Icon-svg__edit" stroke={color} />
  ),
  trash: (color) => (
    <TrashSVG className="Icon-svg Icon-svg__trash" stroke={color} />
  ),
  hide: (color) => (
    <HideSVG className="Icon-svg Icon-svg__hide" stroke={color} />
  ),
  show: (color) => (
    <ShowSVG className="Icon-svg Icon-svg__show" stroke={color} />
  ),
};

function TodoIcon({ type, color = "gray", onClick, border = "red" }) {
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <span
      className={`Icon-container Icon-container__${type}`}
      onClick={onClick}
      style={{ borderColor: `${border}` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {iconTypes[type](color, isHover)}
    </span>
  );
}

export { TodoIcon };
