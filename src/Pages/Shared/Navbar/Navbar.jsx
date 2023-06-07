import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '/logo.jpg'
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {

  const { user, logOut } = useAuth()

  const handleLogout = () => {
    logOut();
  }

  const navItems = <>
    <NavLink
      to="/"
      className={({ isActive }) => isActive ? "active" : ""
      }
    >Home</NavLink>
    <NavLink
      to="/instractor"
    >Instructor</NavLink>
    <NavLink
      to="/classes"
    >Classes</NavLink>
    <NavLink
      to="/dashboard"
    >Dashboard</NavLink>
    {
      user ? <button onClick={handleLogout} className='btnp'>Logout</button> : <NavLink className="" to="/login">Login</NavLink>
    }

  </>
  return (
    <div className='text-white bg-gray-500 container lg:px-20 navbar z-10 fixed bg-opacity-30'>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 bg-gray-400 bg-opacity-40 p-2 shadow  rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <img className='w-10 h-10 lg:w-20 rounded-full lg:h-20 mt-5' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;