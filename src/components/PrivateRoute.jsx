import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../firebaseProvider/FirebaseProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-spinner loading-lg ml-[600px]"></span>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;