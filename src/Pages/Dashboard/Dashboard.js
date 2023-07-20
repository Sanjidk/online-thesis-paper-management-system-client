import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open z-30 bg-slate-300">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content p-4 ">
                <Outlet></Outlet>
            </div>

            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu w-72 h-full bg-black p-0">

                    <li className='text-white bg-green-800 p-2'><Link to="/dashboard">Report Notice</Link></li>
                    <li className='text-white bg-green-900  p-2'><Link to="/dashboard/createNotice">Create Notice</Link></li>
                    <li className='text-white p-2 bg-green-800'><Link to="/dashboard/plagiarism">Check Plagiarism</Link></li>
                    <li className='text-white p-2 bg-green-900'><Link to="/dashboard/upload">Upload Report</Link></li>
                    <li className='text-white p-2 bg-green-800'><Link to="/dashboard/users">User List</Link></li>
                    <li className='text-white p-2 bg-green-900'><Link to="/dashboard/reportList">Report List</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;