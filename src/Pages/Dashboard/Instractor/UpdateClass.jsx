import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../assets/business-team-discussing-ideas-startup_74855-4380.avif'
import Swal from 'sweetalert2';

const UpdateClass = () => {
    const {user} = useAuth();
    const classes = useLoaderData();
    console.log(classes);

    const updatedClass = (e) => {
        e.preventDefault();
        // console.log(e);
        const form = e.target;
        const name = form.name.value;
        const seats = form.seats.value;
        const price = form.price.value;

        const updatedClass = {price, seats, name};

        fetch("https://summer-camp-server-pi-dun.vercel.app/classes", {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedClass)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated Complete',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        
    }

    return (
        <div>
            <div className='mx-10 my-40 flex items-center'>
                <div>
                    <form onSubmit={updatedClass} className='w-[500px] p-10 border border-rose-200'>
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={classes.name} type="text" name='name' className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none  dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={user.displayName} name='instractorName' type="text" disabled className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                            <label  className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={user.email} type="text" disabled className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Email</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={classes.seats}  type="number" name='seats' className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available Seats</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={classes.price} type="number" name='price' className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                        <input className='btnp w-full' type="submit" value="Update Class" />
                    </form>
                </div>
                <img className='w-[800px]' src={img} alt="" />
            </div>
        </div>
    );
};

export default UpdateClass;