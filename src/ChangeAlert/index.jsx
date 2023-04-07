import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert(synchronize) {
  const { show, toogleShow } = useStorageListener(synchronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>It looks like you made some changes in other window or tab</p>
          <p>Would you like to synchronize them?</p>
          <button
            className="TodoForm-button TodoForm-button__add"
            onClick={toogleShow}
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

export { ChangeAlert };
