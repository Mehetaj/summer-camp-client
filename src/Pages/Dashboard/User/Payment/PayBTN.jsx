import axios from 'axios';
import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const PayBTN = ({ item }) => {

    const { user } = useAuth()

    const handlePay = () => {
        console.log(item);
    }

    return (
        <div>
            {/* <Link item={item} to="/dashboard/payment"><button onClick={() => handlePay()} className='btn'>Pay</button></Link> */}
           <Link to={`/dashboard/payment/${item._id}`}> <button onClick={() => handlePay()} className='btn'>Pay</button></Link>
        </div>
    );
};

export default PayBTN;