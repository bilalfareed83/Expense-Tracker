import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transcation: [
    { id: 1, text: 'flower', amount: 20 },
    { id: 1, text: 'salary', amount: -440 },
    { id: 1, text: 'shoes', amount: 10 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        transcation: state.transcation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
