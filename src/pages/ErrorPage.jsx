import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
    return (
        <div className='text-center font-bold mt-56'>
              <Helmet>
                <title>Error</title>
            </Helmet>
            <h1>This is 404 page</h1>
        </div>
    );
};

export default ErrorPage;