import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxios';

const ManageUsers = () => {
    const [users, setUsers] = useState([])
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get("/users")
            .then(res => {
                console.log(res.data);
                setUsers(res.data)
            })
    }, [])
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
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td><button className="btn btn-ghost ">Make Admin</button></td>
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