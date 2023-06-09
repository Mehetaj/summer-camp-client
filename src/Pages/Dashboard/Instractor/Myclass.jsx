import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxios';
import useAuth from '../../../Hooks/useAuth';
import { FaPenAlt } from 'react-icons/fa'

const Myclass = () => {
    const [classes, setClasses] = useState([])
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        // fetch('http://localhost:5000/classes')
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     setClasses(data)
        // })
        axiosSecure.get('/classes')
            .then(data => {
                // console.log(data.data);
                const filtered = data.data.filter(item => item.email === user?.email)
                // console.log(filtered);
                setClasses(filtered)
            })
    }, [])
    return (
        <div className='m-14'>
            <h1 className='text-3xl font-bold my-10'>My Classes</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-rose-400 text-lg text-white'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Total Student</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(
                                (item, i) =>
                                    <tr to={i}>
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item?.photo} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>0</td>
                                        <td>
                                            { item.status? item.status : 'Pending'}
                                        </td>
                                        <td>
                                            No Feedback
                                        </td>
                                        <th>
                                            <button className="btn bg-rose-400 text-white btn-ghost text-xl"><FaPenAlt /></button>
                                        </th>
                                    </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Myclass;