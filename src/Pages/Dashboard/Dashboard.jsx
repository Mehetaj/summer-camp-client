import React from 'react';
import logo from '/logo.jpg'
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin'
import useInstructor from '../../Hooks/useInstructor';
import { FaHome } from 'react-icons/fa'

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
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <label htmlFor="my-drawer-2" className="btn btn-circle swap swap-rotate btnp drawer-button lg:hidden">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />

                        {/* hamburger icon */}
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                        {/* close icon */}
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                    </label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-black bg-gray-100">
                        <div className='flex gap-4 items-center'>
                            <img className='w-[100px] h-[100px] rounded-full' src={logo} alt="" />
                            <p className='text-2xl font-bold'>Music Hub</p>
                        </div>
                        {isAdmin ? <>
                            <li><Link to="/dashboard/manageclass">Manage Class</Link></li>
                            <li><Link to="/dashboard/manageusers">Manage Users</Link></li>
                        </>
                            :
                            isInstructor ?
                                <>
                                    <li><Link to="/dashboard/add-class">Add a Class</Link></li>
                                    <li><Link to="/dashboard/myclass">My Class</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to="/dashboard/myselectedclass">My Selected Classes</Link></li>
                                    <li><Link to="/dashboard/enrolled">My Enrolled Classes</Link></li>
                                    <li><Link to="/dashboard/paymenthistory">Payment History</Link></li>
                                </>}
                        <Link className='btnp w-full' to="/">Back to Home</Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;