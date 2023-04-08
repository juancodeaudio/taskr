import React from "react";
import "./ThemeColor.css";

function ThemeColor({ themeChange }) {
  return (
    <div className="theme-switch-wrapper">
      <em>☀</em>
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          //   theme={themeColor}
          onChange={themeChange}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export { ThemeColor };
