import React, { useEffect, useState } from "react";

function useStatus() {
    const [status, setStatus] = useState(navigator.onLine)

    useEffect(() => {
        const updateStatus = () => setStatus(navigator.onLine)
        window.addEventListener('online', updateStatus)
        window.addEventListener('offline', updateStatus)

        return () => {
            window.removeEventListener("online", updateStatus);
            window.removeEventListener("offline", updateStatus);
        };
    }, [])

    return status;

}

export default useStatus