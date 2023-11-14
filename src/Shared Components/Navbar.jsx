import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';






const Navbar = () => {
    const navItems = <>
        <Link to="/"><li><a>Home</a></li></Link>
        <Link to="inventory"><li><a>Inventory</a></li></Link>
        <li><a>Featured</a></li>
        <Link to="ourProducts"><li><a>Our Products</a></li></Link>
        <li><a>Modification</a></li>
        {/* <Link to="reviews"><li><a>Reviews</a></li></Link> */}
        <Link to="aboutus"> <li><a>About Us</a></li></Link>
        {/* <li><a>Compare</a></li> */}
        <li className='hover:bg-lime-500 hover:text-white'><a>Appointment</a></li>
    </>

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full p-0 navbar text-white">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className=" px-10 w-1/6 logo text-black h-full">ProDrive</div>
                        <div className="flex-none w-5/6  navigation_bar hidden lg:block h-full">
                            <div className='w-full h-10 bg-black'>

                            </div>
                            <ul className="menu menu-horizontal font-siara text-lg lg:sticky top-0 font-bold lg:px-10 text-black">
                                {/* Navbar menu content here */}
                                {navItems}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;