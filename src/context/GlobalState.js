import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transcations: [
    { id: 1, text: "flower", amount: 1400 },
    { id: 2, text: "salary", amount: -440 },
    { id: 3, text: "shoes", amount: 10 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ACTION

  function deleteTranscation(id) {
    dispatch({
      type: "DElETE_TRANSCATION",
      payload: id,
    });
  }

  function addTranscation(payload) {
    dispatch({
      type: "ADD_TRANSCATION",
      payload,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transcations: state.transcations,
        deleteTranscation,
        addTranscation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
