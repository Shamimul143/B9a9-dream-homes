// import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";



const HomeDetails = () => {

    // const [items, setItems] = useState([])
    const homes = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const home = homes.find(book => book.id === idInt)
    const { image, estate_title, price, status, area, description, location, facilities } = home




    return (
        <div className="card bg-base-100 shadow-xl p-5  border-2 border-[#f3f3f3]">
              <Helmet>
                <title>Home Details</title>
            </Helmet>
            <div><figure ><img className="py-5 rounded-xl " src={image} alt="Home" /></figure></div>
            <div className="card-body">
                <h2 className="card-title font-bold">{estate_title}</h2>
                <div className='space-x-5 text-[#23be0a] mb-3'>
                    <span className='bg-[#f3f3f3] py-1 px-4 rounded-2xl text-sm font-semibold'>{status}</span>
                    <span className='bg-[#f3f3f3] py-1 px-4 rounded-2xl text-sm font-semibold'>{area}</span>
                </div>
                <p> <span className="font-bold">Location:</span> {location}</p>
                <p><span className="font-bold">Price:</span> {price}</p>
                <div>
                    <p className="font-bold">Facilities: </p>
                    <li>{facilities[0]}</li>
                    <li>{facilities[1]}</li>
                    <li>{facilities[2]}</li>
                 
                </div>
                <p><span className="font-bold">Description: </span>{description}</p>
            </div>
        </div>
    );
};

export default HomeDetails;