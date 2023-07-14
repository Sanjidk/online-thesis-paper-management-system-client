import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer lg:drawer-open z-30">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content p-4">
                <h1 className='text-3xl font-bold'>Welcome to Dashboard</h1>
                <Outlet></Outlet>
            </div>

            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    <li className='text-white'><Link to="/dashboard">Report Notice</Link></li>
                    <li className='text-white'><Link to="/dashboard/users">User List</Link></li>
                    <li className='text-white'><Link to="/dashboard/reportList">Report List</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;