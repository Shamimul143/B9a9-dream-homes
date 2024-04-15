import{ useContext } from 'react';
import { AuthContext } from './firebaseProvider/FirebaseProvider';

const Hook = () => {
    const all=useContext(AuthContext)
    return all
   
};

export default Hook;