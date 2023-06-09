import React from 'react';

const FeedBackModal = () => {
    return (
        <div>
            <label htmlFor="my_modal_7" onClick={() => handleFeedBack(clas)} className='btnp'>Feedback</label>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Your Feedback</h3>
                    <form>
                        <textarea className="textarea my-4 textarea-bordered" placeholder="FEEDBACK"></textarea>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
};

export default FeedBackModal;