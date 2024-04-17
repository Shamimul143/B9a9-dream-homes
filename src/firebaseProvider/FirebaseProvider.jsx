import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig"


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(user);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
            .then(() => {
                alert('Register successfully');
            })
            .catch(() => { alert("Password minimum 6 character ") })
    }
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
            .then(() => {
                alert('Register successfully');
            })
            .catch(() => { alert("Password minimum 6 character ") })
    }

    const loginUser = (email, password, name, image) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password, name, image)
    }
    const updateUserProfile = (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
        });
    }, [])
    const authInfo = { user, createUser, loginUser, logOut, updateUserProfile, googleLogin, githubLogin, loading }
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

