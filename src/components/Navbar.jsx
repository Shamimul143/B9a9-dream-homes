import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebaseProvider/FirebaseProvider";
import 'animate.css';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("Logout successfully");
                navigate("/login")
            })
    }



    const links = <>
    <div className="animate__animated animate__bounce animate__delay-1s lg:flex">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li><NavLink to="/register"> Register</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        </div>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Dream Homes</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span>{user.email}</span>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" ><img className="w-10 h-10 rounded-full ml-5" src={user?.photoURL||Image} alt="" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box">
                                <li>{user?.displayName}</li>
                                <li><a onClick={handleLogOut} className="">logout</a></li>
                                
                            </ul>
                        </div>

                    </>
                        : <Link to="/login"><button>Login</button></Link>
                }



            </div>
        </div>
    );
};



export default Navbar;