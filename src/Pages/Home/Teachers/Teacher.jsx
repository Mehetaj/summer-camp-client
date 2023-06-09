import React from 'react';

const Teacher = ({teacher}) => {
    // console.log(teacher);
    const {photo,name,email} = teacher;
    return (
        <div>
            <div className=' rounded-full w-[350px] border border-yellow-600 h-[350px] p-6'>
            <div className='flex justify-center'>
            <img className='w-[300px] h-[300px] transition-all rounded-full hover:scale-110' src={photo} alt="" />
            </div>
            <p className='text-2xl font-bold mt-6'>Instructor: {name}</p>
            </div>
        </div>
    );
};

export default Teacher;