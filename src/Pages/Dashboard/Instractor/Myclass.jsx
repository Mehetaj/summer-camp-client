import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxios';
import useAuth from '../../../Hooks/useAuth';
import { FaPenAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Myclass = () => {
    const [classes, setClasses] = useState([])
    const { user } = useAuth();
    // const [id, setId] = useState("")
    const [axiosSecure] = useAxiosSecure();
    const [payment, setPayment] = useState([])
    useEffect(() => {
        axiosSecure.get('/classes')
            .then(data => {
                // console.log(data.data);
                const filtered = data.data.filter(item => item.email === user?.email)
                // console.log(filtered[0]._id);
                // console.log(filtered);
                console.log(filtered);

                setClasses(filtered)
            })
    }, [])

    useEffect(() => {
        axiosSecure.get("/payments")
            .then(res => {
                // const payment = res.data.filter(pay => pay._id == id)
                // console.log(payment);
                const payment = res.data.filter(pay => pay.instructorEmail == user.email)
                console.log(payment);
                setPayment(payment)
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
                            <th>Available Seats</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(
                                (item, i) =>
                                    <tr key={i}>
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
                                        <td className=''>
                                            {
                                                payment ? payment.length : 4
                                            }
                                        </td>
                                        <td>

                                            {
                                                item.seats - payment.length
                                            }
                                        </td>
                                        <td>
                                            {item.status ? item.status : 'Pending'}
                                        </td>
                                        <td>
                                            No Feedback
                                        </td>
                                        <th>
                                            <Link to={`/dashboard/updateclass/${item._id}`} className="btn bg-rose-400 text-white btn-ghost text-xl"><FaPenAlt /></Link>
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