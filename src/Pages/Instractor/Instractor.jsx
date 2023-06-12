import React, { useEffect, useState } from 'react';
import Insta from './Insta';

const Instractor = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch("https://summer-camp-server-pi-dun.vercel.app/allinstructors")
        .then(res => res.json())
        .then(data => {
            setInstructor(data)
        })
    },[])
    return (
        <div className='pt-40'>
            <div className=''>
            <h1 className=' font-bold my-4 text-center text-4xl'>Meet Our Instructors</h1>
            <p className='text-rose-400 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim debitis vel <br /> veritatis placeat dignissimos facere rem accusamus temporibus sunt quo.</p>
            </div>
            <div className='grid mt-14 md:grid-cols-2 lg:grid-cols-3 gap-y-20'>
                {
                    instructor.map(insta => <Insta insta={insta} key={insta._id}/>)
                }
            </div>
        </div>
    );
};

export default Instractor;