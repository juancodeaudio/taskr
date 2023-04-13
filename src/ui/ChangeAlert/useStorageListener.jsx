import React from "react";

function useStorageListener({ synchronize }) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V2") {
      console.log("Hubo cambios en TODOS_V2");
      setStorageChange(true);
    }
  });

  const toogleShow = () => {
    synchronize();
    setStorageChange(false);
    console.log("sincronizando");
  };

  return {
    show: storageChange,
    toogleShow,
  };
}

export { useStorageListener };
