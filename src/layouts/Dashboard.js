import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import { IoFastFoodOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { AuthContext } from '../context/AuthProvider';
import { IoHome } from "react-icons/io5";

const Dashboard = () => {

    const { user, logout } = useContext(AuthContext)

   

    return (
  
            <div className="flex bg-gray-100 min-h-screen">
                <aside className="hidden sm:flex sm:flex-col">
                    <Link to="/" className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
                        <img src={Logo} className='w-20' alt='' />

                    </Link>
                    <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
                        <nav className="flex flex-col mx-4 my-6 space-y-4">
                            <Link to="/dashboard/add-food" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                                <IoFastFoodOutline className='text-3xl text-white' />
                            </Link>
                            <Link to="/dashboard/all-users" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                                <TbUsers className='text-3xl text-white' />
                            </Link>

                        </nav>
                        <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
                            <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                                <span className="sr-only">Settings</span>
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </aside>
                <div className="flex-grow text-gray-800">
                    <header className="flex items-center h-20 px-0 sm:px-10 bg-white">
                        <Link to='/' className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                            <IoHome className='text-2xl'/>
                        </Link>
                        <div className="relative w-full max-w-md sm:-ml-2">
                            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                            <input type="text" role="search" placeholder="Search..." className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
                        </div>
                        <div className="flex flex-shrink-0 items-center ml-auto">
                            <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                                <span className="sr-only">User Menu</span>
                                <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                                    <span className="font-semibold">{user?.displayName}</span>
                                    <span className="text-sm text-gray-600">{user?.email}</span>
                                </div>
                                <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                                    <img src={user?.photoURL} alt="user profile photo" className="h-full w-full object-cover" />
                                </span>
                                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="border-l pl-3 ml-3 space-x-1">
                                <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                                    <span className="sr-only">Notifications</span>
                                    <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                                    <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </button>
                                <button onClick={logout} className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                                    <span className="sr-only">Log out</span>
                                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </header>
                    <Outlet></Outlet>
                </div>
            </div>
       
    );
};

export default Dashboard;