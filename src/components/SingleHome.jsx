
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleHome = ({ home }) => {
    const { id, image, estate_title, price, status, area } = home
    return (
        <div className="card bg-base-100 shadow-xl p-5 h-[450px] border-2 border-[#f3f3f3]">
            <div><figure ><img className="py-5 rounded-lg h-[200px] w-96" src={image} alt="Home" /></figure></div>
            <div className="card-body">
                <h2 className="card-title font-bold">{estate_title}</h2>
                <div className='space-x-5 text-[#23be0a] mb-3'>
                    <span className='bg-[#f3f3f3] py-1 px-4 rounded-2xl text-sm font-semibold'>{status}</span>
                    <span className='bg-[#f3f3f3] py-1 px-4 rounded-2xl text-sm font-semibold'>{area}</span>
                </div>
                <p>{price}</p>
                <Link to={`/home/${id}`} className=' bg-[#23be0a] text-center text-white py-1 rounded-lg px-5'>View Property</Link>
            </div>
        </div>
    );
};

SingleHome.propTypes = {
    home: PropTypes.object
};

export default SingleHome;