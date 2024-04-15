import { useEffect, useState } from 'react';
import SingleHome from './SingleHome';

const Homes = () => {
    const [home, setHome] = useState([])

    useEffect(() => {
        fetch("home.json")
            .then(res => res.json())
            .then(data => setHome(data))
    }, [])
    return (
        < div >
        
            <h1 className="text-center text-2xl font-bold my-10 ">Homes.{home.length}</h1>
            <div className="lg:grid grid-cols-3 gap-4">
                {
                    home.map(home => <SingleHome key={home.id} home={home} ></SingleHome>)
                }
            </div>
        </div >
    );
};

export default Homes;