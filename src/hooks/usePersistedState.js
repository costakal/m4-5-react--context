import React, { useState, useEffect } from "react";

const usePersistedState = (name, initialValue) => {
  const [value, setValue] = useState(() => {
    console.log(persistedValue);

    const persistedValue = window.localStorage.getItem();
    //above line will return a JSON ,s o parse it before return
    if (persistedValue !== null) {
      return persistedValue;
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    //JSON.stringify(value)
    window.localStorage.setItem(name, value);
  }, [value]);
};

export default usePersistedState;
