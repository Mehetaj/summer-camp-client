import React from 'react';
import { FaTrash } from 'react-icons/fa'
import useAxiosSecure from '../../../Hooks/useAxios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';

const MySelectedClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth();


    const { data: myClass = [], refetch } = useQuery({
        queryKey: ['selectedClass'],
        queryFn: async () => {
            const res = await axiosSecure.get("/selectedClass");
            const filtered = res.data.filter(item => item.userEmail === user.email)
            console.log(res);
            return filtered
        }
    })

    // const [cart, refetch] = useCart()

    const handleDelete = (item) => {
        console.log(item._id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/selectedClass/${item._id}`)
                    .then(data => {
                        console.log(data.data);
                        refetch();
                        if (data.data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Successfully Removed.',
                                'success'
                            )
                        }
                    })


                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className='m-10'>
            <h1 className='text-3xl font-bold my-4'>Here Your Selected Class</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-rose-400 text-white'>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Delete</th>
                                <th>Pay</th>
                            </tr>
                        </thead>
                        <tbody className=' font-semibold'>
                            {/* row 1 */}
                            {
                                myClass.map((myClass, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={myClass.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {myClass.name}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(myClass)} className='btn bg-red-500 text-white hover:bg-rose-400'>
                                            <FaTrash />
                                        </button>
                                    </td>
                                    <th>
                                        {/* <Link to={`/dashbaord/payment`} className="btn w-[150px] btn-ghost ">Pay <span>${myClass.price}</span></Link> */}
                                        <Link to={`/dashboard/payment/${myClass._id}`}> <button className='btn'>Pay</button></Link>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySelectedClass;