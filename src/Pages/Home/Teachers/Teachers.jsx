import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxios';
import Teacher from './Teacher';

const Teachers = () => {
    const [axiosSecure] = useAxiosSecure()
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        axiosSecure.get("/allinstructors")
            .then(data => {
                setTeachers(data.data);
            })
    }, [])


    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h1 className='text-xl font-bold text-red-400'>Our Instructors</h1>
                <h1 className='text-3xl font-bold my-4'>Meet Out Instructors</h1>
                <p className=' text-green-900 font-semibold'>
                    Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus <br />
                    metus. Donec eu volutpat nibh, in maximus ligula.
                </p>
            </div>

            <div className='grid md:grid-cols-2 text-center mx-auto lg:grid-cols-3 mt-10 gap-20'>
                {
                    teachers.map(teacher => <Teacher teacher={teacher} key={teacher._id}/>)
                }
            </div>
        </div>
    );
};

export default Teachers;