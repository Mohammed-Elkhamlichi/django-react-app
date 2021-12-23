import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TestApp from "./Test/App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// ReactDOM.render(
//     <React.StrictMode>
//         <TestApp />
//     </React.StrictMode>,
//     document.getElementById("test")
// );
