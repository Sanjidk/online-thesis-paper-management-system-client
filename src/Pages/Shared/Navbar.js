import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>
  }

  if (error) {
    <p className='text-red-500'><small>{error?.message}</small></p>
  }

  const logout = () => {
    signOut(auth);
  };

  const menuItems = <>

    <li><Link to="/">Home</Link></li>
    <li><Link to="upload">Upload Report</Link></li>

    {
      user &&
      <li><Link to="/dashboard">Dashboard</Link></li>

    }

    <li>{
      user ?

        <button onClick={logout} >Logout</button>
        :
        <Link to="/login">Login</Link>
    }</li>

  </>

  return (
    <div className="navbar bg-teal-950 text-white lg:px-12 sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">

            {menuItems}

          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case lg:text-xl">Online Thesis Report Management System</Link>
      </div>
      <div className="lg:navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {menuItems}

        </ul>
      </div>

      <div className="lg:hidden navbar-end">
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Sidebar</label>
      </div>
    </div>
  );
};

export default Navbar;