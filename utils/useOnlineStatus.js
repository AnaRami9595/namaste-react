import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    //save our online status inside a state variable
    //with default value as "true"
    //so we can change it's state and return it later👇

    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {
        //After our first render, if we are offline, we'll
        //change it's status to "false"👇
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })

        //After our first render, if we are online, we'll
        //change it's status to "true"👇
        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })

    }, []);

    //We return our state☁️ variable
    return onlineStatus;
}

export default useOnlineStatus;