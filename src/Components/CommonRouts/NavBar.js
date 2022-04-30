import React from 'react';
import logo from '../header/caroImage/logo.png'
import CustomLink from './CustomLink';

const NavBar = () => {
    return (
        <>
            <nav className="
             sticky sticky-top w-full flex flex-wrap items-center justify-between py-4 bg-gray-50 text-gray-500 hover:text-gray-700
                shadow navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">

                    <CustomLink to='/'><img className='w-[130px]' src={logo} alt="" /></CustomLink>

                    <button className="
                                navbar-toggler
                                text-gray-500
                                border-0
                                hover:shadow-none hover:no-underline
                                py-2
                                px-2.5
                                bg-transparent
                                focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                            className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">

                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">

                        </ul>
                        {/* <!--start of Right links --> */}
                        <ul className="navbar-nav flex flex-col pl-0 list-style-none ">
                            <li className="nav-item pr-2">
                                <CustomLink to='/' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Home</CustomLink>
                            </li>
                            <li className="nav-item pr-2">
                                <CustomLink to='/addproduct' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Add Product</CustomLink>
                            </li>
                            <li className="nav-item pr-2">
                                <CustomLink to='/removeproduct' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Remove Product</CustomLink>
                            </li>
                            <li className="nav-item pr-2">
                                <CustomLink to='/register' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Register</CustomLink>
                            </li>
                            <li className="nav-item pr-2">
                                <CustomLink to='/login' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Login</CustomLink>
                            </li>
                        </ul>

                    </div>

                    {/* <!-- Collapsible wrapper --> */}
                </div>
            </nav>
        </>
    );
};

export default NavBar;