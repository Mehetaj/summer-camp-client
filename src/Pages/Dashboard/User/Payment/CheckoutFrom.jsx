import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import './checkout.css'
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxios';

const CheckoutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    useEffect(() => {
        if (condition) {
            
        }
    }, [])







    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <div className='w-2/3'>
                <form onSubmit={handleSubmit} className=''>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <div className='w-[400px] mx-auto my-6'>
                        <button className='btnp w-[500px] -ml-32 ' type="submit">
                            Pay
                        </button>
                    </div>
                </form>
                {/* {
                    cardError && <p className='text-red-600'></p>
                }
                {
                    transactionId && <p className='text-green-500'>Transaction Complete with with ID : {transactionId}</p>
                } */}
            </div>
        </div>
    );
};

export default CheckoutFrom;