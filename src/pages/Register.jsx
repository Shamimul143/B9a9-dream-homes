import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../firebaseProvider/FirebaseProvider";
import { useNavigate } from "react-router-dom";



const Register = () => {

    const { createUser, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const image = e.target.image.value;


        createUser(email, password, name, image)
            .then(() => {
                alert('Register successfully');
                e.target.reset();
                navigate("/")
            })
            .catch(() => { alert("Password minimum 6 character ") })
    }
    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            
            <div className="hero min-h-screen bg-base-200">
                
                <div className="hero-content flex-col lg:flex-row-reverse">
               
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                        <h2 className="font-bold text-center">Register Now!</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image url</span>
                                </label>
                                <input type="url" name="image" placeholder="Your Image url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        <div className="divider">Continue With</div>
                        <div className="py-5 space-x-5 text-center">
                            <button onClick={() => googleLogin()} className="btn btn-accent">Google</button>
                            <button onClick={() => githubLogin()} className="btn btn-accent" >Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;