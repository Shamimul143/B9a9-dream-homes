import { Helmet } from "react-helmet-async";
import Homes from "../components/Homes";



const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Homes></Homes>
        </div>
    );
};

export default HomePage;