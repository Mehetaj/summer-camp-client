import React from 'react';

const OneClassDemo = ({classes}) => {
    // console.log(classes);
    const {photo,name,instructor, email} = classes
    return (
        <div className='border w-[400px] border-red-500 rounded-xl'>
            <img className='w-[400px] h-[300px] rounded-t-xl' src={photo} alt="" />
            <div className='p-6'>
                <p className='text-3xl font-bold my-4'>{name}</p>

            <p className='text-xl font-semibold mt-3'>Instructor: {instructor}</p>
            <p className='mt-3'>Email Address : {email}</p>
            </div>

        </div>
    );
};

export default OneClassDemo;