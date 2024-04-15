import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig"
import { GoogleAuthProvider } from 'firebase/auth/cordova';

export const AuthContext = createContext(null)

const provider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
console.log(user);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin =()=>{
        console.log("sdagjfhkgs");
        return signInWithPopup(auth, provider)

    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])
    const authInfo = { user, createUser, loginUser,googleLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.object
};

export default FirebaseProvider;

