import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxios';
import {  FaUserShield } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    // const [users, setUsers] = useState([])
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [],refetch  } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                // console.log();
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='m-10'>
            <h1 className='text-3xl font-bold my-10'>Manage All Users</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={i}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                    {
                                                user.role === 'admin'
                                                    ?
                                                    'admin'
                                                    :
                                                    <button
                                                        onClick={() => handleMakeAdmin(user)}
                                                        className='btn bg-white text-black
                                            border-none hover:text-yellow-400'><FaUserShield /></button>
                                            }
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost ">Make Instructor</button>
                                    </th>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;