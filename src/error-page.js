import { Link, useRouteError } from "react-router-dom";
import RaceLogo from "./components/raceLogo/raceLogo";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);



    return (
        <div id="error-page">
            <RaceLogo />
            {error.status === 404 && <div>
                <h1>404 Page not found</h1>
                <p>Sorry, can't find the page you are looking for.</p>
                <Link to={'/'} className="btn btn-primary">Go to the homepage</Link>
            </div>}
            {error.status !== 404 &&  <div>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <Link to={'/'} className="btn btn-primary">Go to the homepage</Link>
            </div>}
        </div>
    );
}