import React, { useEffect } from "react";

const Alerts = ({ alert }) => {
    console.log(alert);
    return <div className={"alert alert-" + alert.bg}>{alert.content}</div>;
};

export default Alerts;
