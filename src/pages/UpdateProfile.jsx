import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../firebaseProvider/FirebaseProvider";
import { Navigate } from "react-router-dom";





const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext)
    const handleUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;

        updateUserProfile(name, image)
            .then(() => {
                alert('Update successfully');
                Navigate();
            })
    }

    return (
        <div>
            <Helmet>
                <title>UpdateProfile</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdate} className="card-body">
                            <h2 className="font-bold text-center">Update Now!</h2>
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;