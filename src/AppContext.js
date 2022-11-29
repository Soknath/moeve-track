import React, { useState } from "react";

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
  const [store, setStore] = useState({
    map: null,
    activeMenu: "Home",
  });
  const [actions, setActions] = useState({
    setMap: (map) => setStore({ ...store, map }),
    setActiveMenu: (menu) => setStore({ ...store, activeMenu: menu }),
  });

  return (
    <AppContext.Provider value={{ store, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};
