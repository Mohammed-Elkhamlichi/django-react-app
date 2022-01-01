import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { reducer, initialState } from "./Users/reducer";
import { UsersProvider } from "./Users/UsersProvider";

ReactDOM.render(
    <React.StrictMode>
        <UsersProvider reducer={reducer} initialState={initialState}>
            <App />
        </UsersProvider>
    </React.StrictMode>,

    document.getElementById("root")
);
