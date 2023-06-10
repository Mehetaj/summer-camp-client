import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import './checkout.css'
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxios';

const CheckoutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("")
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    // useEffect(() => {
    //     if (condition) {

    //     }
    // }, [])







    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error);
        } else {
            setError("")
        }

        console.log(card);

    }

    return (
        <div className='w-[400px]'>
            <form className='' onSubmit={handleSubmit}>
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
                <button className='btnp w-full rounded-md' type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className='error'> {error.message} </p>
            </form>
        </div>
    );
};

export default CheckoutFrom;