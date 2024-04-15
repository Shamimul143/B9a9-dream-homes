import { useContext } from "react";
import { AuthContext } from "../firebaseProvider/FirebaseProvider";
import Hook from "../Hook";


const GoogleLogin = () => {
    const { googleLogin } = Hook()


    return (
        <div>
            <button onClick={()=>googleLogin()}>Google</button>
        </div>
    );
};

export default GoogleLogin;