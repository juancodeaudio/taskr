import React from "react";
import "./ThemeColor.css";

function ThemeColor({ changeTheme }) {
  return (
    <div className="theme-switch-wrapper">
      <em>☀</em>
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          //   theme={themeColor}
          onChange={changeTheme}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export { ThemeColor };
