import React, { Children } from 'react';
import img from '../../../assets/business-team-discussing-ideas-startup_74855-4380.avif'
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useAuth()
    // const [axiosSecure] = useAxiosSecure()
    // console.log(user);
    // console.log(user.email)

    const handleAddClass = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const seats = form.seats.value;
        const price = form.price.value;
        const image = form.image.files[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_token
            }`

            fetch(url, {
                method: 'POST',
                body: formData
            }).then(res => res.json()).then(imgData => {
                const imgUrl = imgData.data.display_url;
                const newClass = {name,seats,price, photo: imgUrl, instructor: user?.displayName, email: user?.email}

                // fetch("http://localhost:5000/allclass", {
                //     method: 'POST',
                //     headers: { 'content-type': 'application/json' },
                //     body: JSON.stringify(newClass)
                // })

                fetch("http://localhost:5000/classes", {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(newClass)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class Added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            })
    }

    return (
        <div className='mx-10 my-40 flex items-center'>
            <div>
                <form onSubmit={handleAddClass} className='w-[500px] p-10 border border-rose-200'>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name='name' className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none  dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label className="peer-focus:font-medium  text-sm text-rose-500 dark:text-rose-400 duration-300 transform mt-10 -mb-6 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class Image</label>
                        <input name='image' type="file" className="file-input file-input-bordered block file-input-secondary w-full max-w-xs" required />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input name='instractorName' type="text" disabled defaultValue={user.displayName} className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" disabled defaultValue={user.email} className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name='seats' className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available Seats</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name='price' className="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    </div>
                    <input className='btnp w-full' type="submit" value="Add Class" />
                </form>
            </div>
            <img className='w-[800px]' src={img} alt="" />
        </div>
    );
};

export default AddClass;