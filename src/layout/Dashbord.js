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
                    <ul className="menu p-4 w-56 bg-emerald-50 text-base-content">

                        <Link to='/dashbord'><li className='  font-bold text-md hover:bg-base-300 rounded-md p-2'>Add Product</li></Link>
                        <Link to='/dashbord/orders'><li className=' font-bold hover:bg-base-300 rounded-md text-md p-2'> Total Orders</li></Link>
                        <Link to='/dashbord/products'><li className=' font-bold hover:bg-base-300 rounded-md text-md p-2'>All Products</li></Link>
                        <Link to='/dashbord/customers'><li className=' font-bold hover:bg-base-300 rounded-md text-md p-2'>All Customers</li></Link>


                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashbord;
