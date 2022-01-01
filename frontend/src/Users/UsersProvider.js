import React, { useReducer, createContext, useContext } from "react";

// context API
export const UsersContext = createContext();

export const UsersProvider = ({ reducer, initialState, children }) => {
    return (
        <UsersContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </UsersContext.Provider>
    );
};

export const useUsersContext = () => useContext(UsersContext);
