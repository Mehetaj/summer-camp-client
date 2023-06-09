import React from 'react';

const OneClassDemo = ({classes}) => {
    console.log(classes);
    const {photo,name,price,instructor, seats} = classes
    return (
        <div className='border w-[400px] border-red-500 rounded-xl'>
            <img className='w-[400px] rounded-t-xl' src={photo} alt="" />
            <div className='p-6'>
                <p className='text-3xl font-bold my-4'>{name}</p>
            <div className='flex gap-10'>
            <p>Available Seats : {seats}</p>
            <p>Price: ${price}</p>
            </div>

            <p className='text-xl font-semibold mt-3'>Instructor: {instructor}</p>

            <button className='btnp my-4 w-full'>Select Class</button>
            </div>

        </div>
    );
};

export default OneClassDemo;