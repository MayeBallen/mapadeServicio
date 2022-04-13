import React, { useReducer, createContext } from "react";
export const DashContext = createContext({});

let initialState = {
  refrescar: false,
};

let contextReducer = (state, action) => {
  switch (action.type) {
    case "REFRESCAR":
      return { ...state, refrescar: action.payload };
    default:
      return initialState;
  }
};

const DashContextProvider = ({ children }) => {
  const [states, dispatch] = useReducer(contextReducer, initialState);

  return (
    <DashContext.Provider value={[states, dispatch]}>
      {children}
    </DashContext.Provider>
  );
};

export default DashContextProvider;
