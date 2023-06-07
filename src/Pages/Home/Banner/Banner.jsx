import React, { useState } from 'react';
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-[900px]' src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[900px]' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[900px]' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[900px]' src={img4} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;