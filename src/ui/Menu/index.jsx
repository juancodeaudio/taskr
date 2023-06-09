import React from "react";
import "./Menu.css";

function Menu({ changeTheme, themeColor }) {
  console.log("Menu Theme", themeColor);
  return (
    <div className="header-wrapper">
      <p>Made by @juancodeaudio</p>
      <a href="https://github.com/juancodeaudio/taskr" className="icon github">
        <div className="tooltip">Github</div>
        <span>
          <i className="fab fa-github"></i>
        </span>
      </a>
      <em>☀</em>
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={themeColor === "light" ? true : false}
          onChange={changeTheme}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export { Menu };
