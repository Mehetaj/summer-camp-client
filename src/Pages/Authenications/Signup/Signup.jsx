import React, { useState } from 'react';
import bg from '../../../assets/Login.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxios';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_image_upload_token

const Signup = () => {
    const [axiosSecure] = useAxiosSecure()
    const [error, setError] = useState("");
    const { createUser, updateUserProfile, setLoading } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const { name, email, password, confirmpassword } = data;
        if (password !== confirmpassword) {
            setError("Password Not Matched");
            return;
        };
        
        // Image Upload
    const image = data.photo[0]
    const formData = new FormData()
    formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_token
    }`
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const imageUrl = imageData.data.display_url;
        console.log(imageUrl);

        createUser(email, password)
          .then(result => {
            const saveUser = { name: name, email: email }
            if (result.user) {
                axiosSecure.post("/users", {saveUser})
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }

            updateUserProfile(name, imageUrl)
              .then(() => {
                
              })
              .catch(err => {
                setLoading(false)
                console.log(err.message)
              })
          })
          .catch(err => {
            setLoading(false)
            console.log(err.message)
            
          })
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        
      })

    return
       


        // createUser(email, password)
        //         .then(result => {
        //             console.log(result.user);
        //             if (result.user) {
        //                 updateUserProfile(name, photo)
        //             }
        //             setError("")
        //             navigate('/')

        //         })





    }
    return (
        <div className='flex pt-20 justify-around items-center'>
            <div>
                <img width={600} src={bg} alt="" />
            </div>
            <div className='flex  justify-center mt-20'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-[400px] border border-red-500 p-8'>
                    <h1 className='text-3xl font-bold mb-6'>Sign up Here</h1>
                    <div className="relative z-0 w-full mb-10 group">
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"



                        >Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input {...register("email", { required: true })} type="email" className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                                message: 'Password must contain a capital letter and a special character',
                            },
                        })} type="password" className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />

                        <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input {...register("confirmpassword", { required: true })} type="password" className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                    </div>
                    <div className="relative mt-10 z-0 w-full group">
                        <input {...register("photo", { required: true })} type="file" className="file-input mb-6 file-input-bordered file-input-secondary mt-3 w-full max-w-xs" />
                        <label className="peer-focus:font-medium block absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600  peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                    </div>
                    <input className='btnp w-full my-4' type="submit" value="Login" />
                    <p>Already Have an Account? <Link to="/login" className='text-red-400 font-semibold'>Login Here</Link></p>
                    {error && <p className='text-red-500 animate-bounce mt-4'>{error}... Try Again</p>}
                    {errors.password && <p className='text-red-500 animate-bounce mt-4'>{errors.password.message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Signup;