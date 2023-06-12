import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxios';
import axios from 'axios';
import {FaRegHandPointer} from 'react-icons/fa'

const Enrolled = () => {
    const { user } = useAuth();
    const [datas, setData] = useState([])
    const { axiosSecure } = useAxiosSecure()
    useEffect(() => {
        axios.get("http://localhost:5000/payments")
            .then(res => {
                const data = res.data;
                const filter = data.filter(item => item.email === user.email)
                setData(filter);
            })
    }, [])
    // name: class name, userName, email, date, photo
    return (
        <div className='m-8'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg'>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Class Name</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map((data, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {data.name}
                                </td>
                                <td>{data.userName}</td>
                                <th>{data.email}</th>
                                <th>{data.date}</th>
                                <th><FaRegHandPointer className='w-10 h-8'/></th>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Enrolled;