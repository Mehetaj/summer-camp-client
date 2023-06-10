import React, { useEffect, useState } from 'react';
import PerClass from './PerClass';

const Classes = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/classes")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setClasses(data)
            })
    }, [])

    return (
        <div className='pt-40'>
            <div className=' text-center'>
                <h1 className='text-4xl mb-3 font-bold'>Our Classes</h1>
                <p className='text-rose-400'>Join Our Music Classes</p>
            </div>

            <div className=' grid my-14 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    classes.map(perClass => <PerClass classes={perClass} key={perClass._id}/>)
                }
            </div>
        </div>
    );
};

export default Classes;