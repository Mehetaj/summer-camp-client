import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK)
const Payment = () => {


    return (
        <div className='m-14'>
            <div className=' m-10'>
                <h1 className='text-3xl font-bold'>Payment</h1>
                <p className='text-rose-400 my-2'>Please Process</p>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutFrom />
            </Elements>
        </div>
    );
};

export default Payment;