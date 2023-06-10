import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK)
const Payment = () => {
    const { id } = useParams();
    const [data, setData] = useState()
    // console.log(id);
    useEffect(() => {
        fetch("http://localhost:5000/selectedClass")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const filtered = data.find(item => item._id === id)
                setData(filtered)
            })
    }, []);
    // console.log(typeof amount);
    return (
        <div className='m-10'>
            <p className='text-3xl font-bold'>Payment </p>
            <h1 className='text-rose-500'>Please Proccess Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutFrom data={data} />
            </Elements>
        </div>
    );
};

export default Payment;