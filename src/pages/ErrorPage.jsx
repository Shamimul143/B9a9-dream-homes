import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='text-center font-bold mt-56'>
              <Helmet>
                <title>Error</title>
            </Helmet>
            <h1>This is 404 page</h1>
            <Link to="/"><button className="btn mt-5">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;