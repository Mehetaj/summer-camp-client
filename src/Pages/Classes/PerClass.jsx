import React from 'react';
import { FaUserCheck } from 'react-icons/fa'

const PerClass = ({ classes }) => {
    console.log(classes);
    const { photo, name, instructor, seats, price } = classes;
    return (
        <div className=' shadow-xl p-10 shadow-red-300'>
            <img className='w-[400px] h-[250px]' src={photo} />
            <p className='text-4xl font-bold my-4'>{name}</p>
            <div className='flex gap-2 mb-4 items-center'>
                <FaUserCheck />
                <p className=' font-semibold'>Instructor: {instructor}</p>
            </div>
            <div className='flex mb-6 justify-between font-semibold'>
                <p>Price: ${price}</p>
                <p>Avaiable Seats : {seats}</p>
            </div>

            <button className='btnp w-full'>Select The Class</button>
        </div>
    );
};

export default PerClass;