import React, { useEffect, useState } from 'react';
import logo from '/logo.jpg'
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin'
import useInstructor from '../../Hooks/useInstructor';

const Dashboard = () => {
    // const [isInstructor, setInstructor] = useState(false);
    const [isInstructor] = useInstructor()
    const [isAdmin] = useAdmin()
    // const isAdmin = true


    // const isAdmin = true;
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        <div className='flex gap-4 items-center'>
                            <img className='w-[100px] h-[100px] rounded-full' src={logo} alt="" />
                            <p className='text-2xl font-bold'>Music Hub</p>
                        </div>
                        {/* Sidebar content here */}

                        {/* {
                            isAdmin ?
                                <div>
                                    <li><Link>Manage Class</Link></li>
                                    <li><Link to="/dashboard/manageusers">Manage Users</Link></li>
                                </div> : 

                            instructor ?  <div>
                            <li><Link to="/dashboard/add-class">Add a Class</Link></li>
                            <li><Link>My Class</Link></li>
                        </div>
                        <div>
                            <li><Link>My Selected Classes</Link></li>
                            <li><Link>My Enrolled Classes</Link></li>
                            <li><Link>Payment History</Link></li>
                        </div>
                        } */}
                        {isAdmin? <>
                            <li><Link to="/dashboard/manageclass">Manage Class</Link></li>
                            <li><Link to="/dashboard/manageusers">Manage Users</Link></li>
                        </>
                        :
                        isInstructor?
                        <>
                            <li><Link to="/dashboard/add-class">Add a Class</Link></li>
                            <li><Link to="/dashboard/myclass">My Class</Link></li>
                        </>
                        :
                        <>
                            <li><Link>My Selected Classes</Link></li>
                            <li><Link>My Enrolled Classes</Link></li>
                            <li><Link>Payment History</Link></li>
                        </>}
                        <Link className='btnp w-full' to="/">Back to Home</Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;