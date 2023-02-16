import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Profile = () => {

    const { user, logout } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <ul className='flex space-x-8 capitalize items-center text-[15px]'>
                <li
                    className=''
                >
                    {
                        !user?.uid ?
                            <Link
                                to='/login'
                                duration={500}
                                offset={-70}
                                className='duration-300 bg-crimson px-7 py-2 text-white hover:text-black rounded-3xl hover:bg-secondary-hover transition-all'>
                                Log in
                            </Link>
                            :
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt=''/>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow text-black menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                      <p>{user?.displayName}</p>
                                    </li>
                                    <li><p className='lowercase'>{user?.email}</p></li>
                                    <li><button onClick={logout}>Logout</button></li>
                                </ul>
                            </div>
                    }
                </li>
            </ul>
        </div>
    );
};

export default Profile;