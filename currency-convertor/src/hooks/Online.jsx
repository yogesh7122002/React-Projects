import React from "react";
import useStatus from "./useOnlineStatus";


function Online() {
    const isOnline = useStatus()
    return (
        <>
            <h2>You are currently: {isOnline ? "Online" : "Offline"}</h2>
        </>
    )
}


export default Online