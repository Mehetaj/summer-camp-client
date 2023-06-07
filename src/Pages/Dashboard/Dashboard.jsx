import React, { useState } from 'react';
import logo from '/logo.jpg'

const Dashboard = () => {
    const [instructor, setInstructor] = useState(true)
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        <div className='flex gap-4 items-center'>
                            <img className='w-[100px] h-[100px] rounded-full' src={logo} alt="" />
                            <p className='text-2xl font-bold'>Music Hub</p>
                        </div>
                        {/* Sidebar content here */}
                        {
                            instructor ? <div>
                                <li><a>Add a Class</a></li>
                                <li><a>My Class</a></li>
                            </div>
                                :
                                <div>
                                    <li><a>My Selected Class</a></li>
                                    <li><a>Enrolled Class</a></li>
                                </div>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;