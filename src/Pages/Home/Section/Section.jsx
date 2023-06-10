import React from 'react';
import img from '../../../assets/family.jpg'
const Section = () => {
    return (
        <div className='mt-20 flex justify-evenly items-center'>
            <div>
                <h1 className='text-xl font-bold text-red-500'>Our Classes</h1>
                <h1 className='text-4xl my-3'>About School</h1>
                <p className='text-rose-500 my-5'>
                    Integer in justo euismod nulla feugiat lacinia <br />
                    non porta velit. Vestibulum vulputate purus <br />
                    sit amet vestibulum ultrices mauris malesuada.
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum sem <br /> ligula. Phasellus eleifend vel justo sit amet volutpat. Duis vitae maximus <br /> ligula, nec mattis libero. Donec eget felis odio.
                </p>

                <button className='btnp mt-6'>Ready to Study</button>
            </div>
            <div>
            <img className='w-[500px]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Section;