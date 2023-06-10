import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import './checkout.css'
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxios';

const CheckoutFrom = ({ data }) => {
    console.log(data);
    // const price = parseInt(data.price)
    // console.log(typeof price);
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("")
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState('')

    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", {price: data})
        .then(res => {
            console.log(res.data);
        })
    },[])






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

        // console.log(card);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous',
                        date: new Date()
                    },
                },
            },
        );

        if (confirmError) {
            setError(confirmError.message)
        }

        console.log(paymentIntent);
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
                <button className='btn bg-rose-400 hover:bg-green-400 text-white w-full' type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className='error'> {error.message} </p>
            </form>
        </div>
    );
};

export default CheckoutFrom;