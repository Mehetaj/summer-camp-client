import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxios';

const History = () => {
    const { user } = useAuth();
    const [pay, setPay] = useState([]);
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get("/payments")
            .then(res => {
                // console.log(res.data);
                const data = res.data;
                const filter = data.filter(item => item.email == user.email);
                setPay(filter);
                console.log(filter);
            })
    }, [])
    // email itemName, name, price, transactionId
    return (
        <div className='m-14 font-semibold'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg'>
                            <th>#</th>
                            <th>Photo</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Class Name</th>
                            <th>Date</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            pay.map((pay,i) =>
                                <tr key={i}>
                                    <th>{i+1}</th>
                                    <td>
                                        <img className='w-10 h-10 rounded-xl' src={pay.photo} alt="" />
                                    </td>
                                    <td>
                                        {pay.userName}
                                    </td>
                                    <td>{pay.email}</td>
                                    <th>
                                         {pay.name}
                                    </th>
                                    <th>{pay.date}</th>
                                    <th>{pay.transactionId}</th>
                                </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default History;