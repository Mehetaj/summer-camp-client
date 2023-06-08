import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg from '../../../assets/mobile-login-concept-illustration_114360-83.avif'
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signIn} = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname
    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result => {
            console.log(result.user);
            navigate( from ,{replace: true} || "/")

        })
    }
    return (
        <div className='flex pt-20 justify-around items-center'>
            <div>
                <img width={600} src={bg} alt="" />
            </div>
            <div className='flex  justify-center mt-20'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[400px] border border-red-500 p-8'>
                <h1 className='text-3xl font-bold mb-6'>Login Now</h1>
                <div className="relative z-0 w-full mb-10 group">
                    <input {...register("email", { required: true })} type="email" className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                    <label  className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input {...register("password", { required: true })} type="password" className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                    <label  className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <input className='btnp w-full my-4' type="submit" value="Login" />
                <p>Don't Have an Account? <Link to="/signup" className='text-red-400 font-semibold'>Sign Up Here</Link></p>
            </form>
        </div>
        </div>
    );
};

export default Login;