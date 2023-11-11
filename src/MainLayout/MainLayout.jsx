import React from 'react';
import Navbar from '../Shared Components/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;