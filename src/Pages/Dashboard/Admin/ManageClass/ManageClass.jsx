import React, { Children, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxios';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const ManageClass = () => {
    // const [axiosSecure] = useAxiosSecure();
    // const [Loadedclasses, LoadedsetClasses] = useState([]);
    // const [classes, setClasses] = useState(Loadedclasses)
    // useEffect(() => {
    //     axiosSecure.get("/classes")
    //         .then(data => {
    //             // console.log(data);
    //             setClasses(data.data)
    //         })
    // }, []);


    // const handleEditInfo = (e) => {
    //     // e.preventDefault()
    //     // console.log(e.target);
    //     // const status = e.target.status.value;
    //     // console.log(status);
    //     console.log(e);
    //     const updatedStatus = { status }

    //     fetch("https://summer-camp-server-pi-dun.vercel.app/classes", {
    //         method: 'PUT',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(status)
    //     }).then(res => res.json()).then(data => {
    //         console.log(data);
    //     })
    // }

    // const [axiosSecure] = useAxiosSecure;
    // const { data: classe = [], refetch } = useQuery(['classes'], async () => {
    //     const res = await axiosSecure.get('/classes');
    //     return res.data;
    // })

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get("/classes");
            console.log(res.data);
            return res.data
        }
    })


    const handleApproved = (item) => {
        console.log(item);
        fetch(`https://summer-camp-server-pi-dun.vercel.app/classes/${item._id}`, {
            method: 'PUT'
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                console.log(data);
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `SuccessFully Approved`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    };



    const handleDeny = (item) => {
        console.log(item);
        fetch(`https://summer-camp-server-pi-dun.vercel.app/classes/${item._id}`, { method: 'PATCH' }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                console.log(data);
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `SuccessFully Denied`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        Swal.fire("Send Feedback Complete")
    }




    return (
        <div className='m-10'>
            <h1 className='text-3xl font-bold'>Manage All Classes</h1>
            <div>
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Price</th>
                                <th>Send Feedback</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((clas, i) => <tr key={clas._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={clas.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {clas.name}
                                    </td>
                                    <td>{clas.instructor}</td>
                                    <th>
                                        {clas.email}
                                    </th>
                                    <th>${clas.price}</th>
                                    <th>
                                        {
                                            clas.status === 'Approved' ? 'No Feedback' : 
                                           <Link to={`/dashboard/feedback/${clas._id}`}><button className='btn'>Feedback</button></Link>
                                        }

                                    </th>
                                    <th className='flex items-center'>

                                        <div
                                        >
                                            <div className="dropdown dropdown-right">
                                                <label tabIndex={0} className="btn m-1">
                                                    {
                                                        clas.status ? clas.status : 'Pending'
                                                    }
                                                </label>

                                                {
                                                    clas.status
                                                        ?
                                                        ''
                                                        :
                                                        <ul tabIndex={0} className="dropdown-content menu p-6 relative shadow bg-gray-500 bg-opacity-40 rounded-box w-52">
                                                            <button className='p-4 my-1 btn'>Pending</button>
                                                            <button onClick={() => handleApproved(clas)} className='p-4 btn'>Approve</button>
                                                            <button onClick={() => handleDeny(clas)} className='p-4 my-1 btn'>Deny</button>
                                                        </ul>
                                                }


                                            </div>
                                        </div>

                                    </th>



                                </tr>)
                            }

                        </tbody>
                    </table >
                </div>
            </div>
        </div>
    );
};

export default ManageClass;