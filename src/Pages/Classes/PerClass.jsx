import React, { useState } from 'react';
import { FaUserCheck } from 'react-icons/fa'
import useAxiosSecure from '../../Hooks/useAxios';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const PerClass = ({ classes }) => {
    // console.log(classes);
    const { photo, name, instructor, seats, price } = classes;
    const [disabled, setDisabled] = useState(false)
    const [axiosSecure] = useAxiosSecure()

    // const { data: selected = [], isLoading, refetch } = useQuery({
    //     queryKey: ['selecte-class'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get("/selectedClass")
    //         return res.data
    //     }
    // })

    const { user } = useAuth()

    const handleAddClass = (classes) => {
        // console.log(classes);
        const { name, price, photo } = classes
        const savedClass = { name, price, photo, email: user?.email }
        if (!user) {


            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Login First to Select Class',
                footer: '<a href="">Why do I have this issue?</a>',
            })
        } else {
            axiosSecure.post("/selectedClass", savedClass)
                .then(data => {
                    // console.log(data.data);
                    if (data.data) {
                        console.log(data.data);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }

    return (
        <div className=' shadow-xl p-10 shadow-gray-300'>
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

            <div onClick={() => handleAddClass(classes)} >
                <button disabled={ disabled || user?.role == 'Admin' || user?.role == 'Instructor' || seats.length == 0} onClick={() => setDisabled(!disabled)} className='btnp w-full'>Select The Class</button>
            </div>
        </div>
    );
};

export default PerClass;