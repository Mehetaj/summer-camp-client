import React from 'react';

const Insta = ({ insta }) => {
    const { photo, name, email } = insta;
    console.log(insta);
    return (
        <div className='w-full lg:w-[500px] border border-rose-500 shadow-xl shadow-red-300 rounded-l-full rounded-br-full p-10'>
            <div className='flex justify-center'>
            <img className='w-[300px] transition-all hover:scale-110 h-[300px] rounded-full' src={photo} alt="" />
            </div>
            
            <div className='text-center my-4'>
            <h1 className='text-3xl font-bold font-serif'>Name: {name}</h1>
            <p>Email Address: {email}</p>
            </div>
        </div>
    );
};

export default Insta;