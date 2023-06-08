import React from 'react';

const AddClass = () => {
    return (
        <div className='m-10'>
            <form className='w-[400px] p-10 border border-rose-200'>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text"  class="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                    <label class="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class Name</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <label class="peer-focus:font-medium  text-sm text-rose-500 dark:text-rose-400 duration-300 transform mb-10 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class Image</label>
                <input type="file" className="file-input file-input-bordered block file-input-secondary w-full max-w-xs" required />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text"  class="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                    <label class="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Name</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text"  class="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                    <label class="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Email</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text"  class="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                    <label class="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available Seats</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text"  class="block py-2.5 px-0 w-full text-sm text-rose-900 bg-transparent border-0 border-b-2 border-rose-300 appearance-none dark:text-white dark:border-rose-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                    <label class="peer-focus:font-medium absolute text-sm text-rose-500 dark:text-rose-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
                <input className='btnp w-full' type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;