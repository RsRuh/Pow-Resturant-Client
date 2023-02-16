import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>

        <li
          className='text-white hover:text-crimson cursor-pointer'

        >
          <Link
            to=''
            duration={500}
            offset={-70}
            className='transition-all duration-300'
          >
            Home
          </Link>
        </li>
        <li
          className='text-white hover:text-crimson cursor-pointer'

        >
          <Link
            to='/dashboard'
            duration={500}
            offset={-70}
            className='transition-all duration-300'
          >
            Dashboard
          </Link>
        </li>
        <li
          className='text-white hover:text-crimson cursor-pointer'

        >
          <Link
            to='/shop'

            duration={500}
            offset={-70}
            className='transition-all duration-300'
          >
            Shop
          </Link>
        </li>
        <li
          className='text-white hover:text-crimson cursor-pointer'

        >
          <Link
            to='/orders'
            duration={500}
            offset={-70}
            className='transition-all duration-300'>
            Orders
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
