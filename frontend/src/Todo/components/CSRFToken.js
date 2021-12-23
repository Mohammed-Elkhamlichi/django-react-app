import React from "react";

function csrfcookie(csrftoken) {
    // for django csrf protection
    let cookieValue = null,
        name = "csrftoken";
    if (document.cookie && document.cookie !== "") {
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = csrfcookie("csrftoken");

const CSRFToken = ({ setCsrfToken }) => {
    setCsrfToken(csrftoken);
    return <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />;
};
export default CSRFToken;
