import image1 from "../assets/images/Apartment.jpg"
import image2 from "../assets/images/Senior living community.jpg"
import image3 from "../assets/images/Townhouse.jpg"
import image4 from "../assets/images/Vacation rental.jpg"

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
          <SwiperSlide><div className="max-w-[1200px] "><img className="w-full" src={image1} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-[1200px]"><img className="w-full" src={image2} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-[1200px]"><img className="w-full" src={image3} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-[1200px]"><img className="w-full" src={image4} alt="" /></div></SwiperSlide>

      
        </Swiper>
      </>
    );
};

export default Slider;