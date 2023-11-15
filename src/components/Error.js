import { useRouteError } from "react-router-dom";

const Error = () => {

    const arr = useRouteError();
    return (
        <div className="error">
            <h1>Oops!</h1>
            <h2>Something went wrong!!</h2>
            <h3>{arr.status} {arr.statusText}</h3>
        </div>
    );
}

export default Error;