import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>It looks like you made some changes in other window or tab</p>
          <p>Would you like to synchronize them?</p>
          <button
            className="TodoForm-button TodoForm-button__add"
            onClick={toggleShow}
          >
            Yes!!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
