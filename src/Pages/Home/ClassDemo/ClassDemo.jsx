import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxios';
import OneClassDemo from './OneClassDemo';

const ClassDemo = () => {
    const [classes, setClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get("/classes")
        .then(data => {
            // console.log(data);
            const filtered = data.data.filter(item => item.status === 'Approved')
            setClasses(filtered)
        })
    }, [])
    return (
        <div className='mt-36'>
            <div className='text-center'>
                <h1 className='text-xl font-bold text-red-400'>Our Class</h1>
                <h1 className='text-3xl font-bold my-4'>Join Our Classes</h1>
                <p className=' text-green-900 font-semibold'>
                    Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus <br />
                    metus. Donec eu volutpat nibh, in maximus ligula.
                </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14'>
                {
                    classes.map(perClass => <OneClassDemo key={perClass._id} classes={perClass}/>)
                }
            </div>
        </div>
    );
};

export default ClassDemo;