import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';




const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }

    const navLink =
        <>
            <Link to='/'><li className='font-bold text-md px-2'>Home</li></Link>
            <Link to='/products'><li className='font-bold text-md px-2'>ProductList</li></Link>
            <Link to='/cart'><li className='font-bold text-md px-2'>
                CartProduct</li></Link>

            {
                user?.email === 'admin@gmail.com' &&
                <Link to='/dashbord'><li className='font-bold text-md px-2'>Dashbord</li></Link>
            }

        </>

    return (


        <div>

            <div className="navbar lg:px-10 bg-base-200">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost px-1 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLink
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost px-1 normal-case text-xl font-bold">REPLIQ</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user?.uid ?
                            <>
                                <Link className='font-bold text-md px-2' onClick={() => handleLogOut()}>LogOut</Link>
                            </>
                            :
                            <>
                                <Link className='font-bold text-md px-2' to='/login'>LogIn</Link>
                                <Link className='font-bold text-md px-2' to='/signup'>SignUp</Link>

                            </>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;