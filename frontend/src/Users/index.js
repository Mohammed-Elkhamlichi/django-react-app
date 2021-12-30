import React, { useRef, useReducer } from "react";
import "./UserForm";
import UsersList from "./UsersList";
import UserForm from "./UserForm";
import { initialState, reducer } from "./reducer";
import "./index.css";
import "./Users.css";

const Index = () => {
    // use Reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    const userName = useRef(null);
    const email = useRef(null);

    // handle the submition of the form.
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const user = {
            id: new Date().getTime().toString(),
            userName: userName.current.value,
            email: email.current.value,
        };

        if (user.userName.length >= 2 && user.email.length >= 2) {
            dispatch({ type: "ADD_USER_SUCCESS", user });
            userName.current.value = "";
            email.current.value = "";
        } else {
            dispatch({ type: "ADD_USER_ERROR" });
        }
    };
    return (
        <>
            <UserForm
                handleSubmitForm={handleSubmitForm}
                userName={userName}
                email={email}
                state={state}
            />
            {state.users.length > 0 && (
                <UsersList state={state} dispatch={dispatch} />
            )}
        </>
    );
};

export default Index;
