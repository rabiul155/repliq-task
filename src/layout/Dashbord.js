import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';


const Dashbord = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-56 bg-base-200 text-base-content">



                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashbord;
