import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import './checkout.css'
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxios';
import { useNavigate } from 'react-router-dom';

const CheckoutFrom = ({ data }) => {
    console.log(data);
    // const price = parseInt(data.price)
    // console.log(typeof price);
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("")
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [id , setId] = useState("")

    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        if (data) {
            axiosSecure.post("/create-payment-intent", { price: data })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [])

    const naviagte = useNavigate();






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

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous',
                        date: new Date(),
                        method: card
                    },
                },
            },
        );

        if (confirmError) {
            setError(confirmError.message)
        }

        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            const transactionId = paymentIntent.id;
            console.log(paymentIntent);
            if (transactionId) {

                setId(transactionId)

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Payment Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            // naviagte("/")
        }

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
                <button className='btn bg-rose-400 hover:bg-green-400 text-white w-full' type="submit" disabled={!stripe  }>
                    Pay
                </button>
                <p className='error'> {error.message} </p>
                <p>{id}</p>
            </form>
        </div>
    );
};

export default CheckoutFrom;