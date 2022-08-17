import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main className='App'>
                <Outlet />
            </main>
            
        </div>
    );
};

export default Layout;