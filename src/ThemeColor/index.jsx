import React from "react";
import "./ThemeColor.css";

function ThemeColor() {
  const [themeColor, setThemeColor] = React.useState(false);
  const themeChange = () => {
    if (themeColor) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    setThemeColor(!themeColor);
  };

  return (
    <div className="theme-switch-wrapper">
      <em>☀</em>
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          theme={themeColor}
          onChange={themeChange}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export { ThemeColor };
