import React from "react";

function useStorageListener({ synchronize }) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("Hubo cambios en TODOS_V1");
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
