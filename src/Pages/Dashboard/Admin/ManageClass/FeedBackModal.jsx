import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/useAxios';

const FeedBackModal = () => {
    const data = useLoaderData();
    const [axiosSecure] = useAxiosSecure();
    console.log(data);

    const onSubmit = (e) => {
        e.preventDefault();
        const feedback = e.target.feedback.value;
        console.log(feedback);
        
        axiosSecure.put(`/feedback/${data._id}`, feedback)
        .then(res => {
            console.log(res.data);
        })
    }

    return (
        <div className='m-10'>
            <h1 className='text-4xl font-bold'>Write Your Feedback for change the status</h1>
            <form onSubmit={onSubmit} className='my-10'>
                <textarea  placeholder='Send Feedback' rows={8} cols={80} className=' bg-gray-200 p-4 form-control' type="text" name="feedback" id="" />
                <input type="submit" value="Send Feedback" className='btnp my-6' />
            </form>
        </div>
    );
};

export default FeedBackModal;