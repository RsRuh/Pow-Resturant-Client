import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import components
import Logo from '../assets/img/logo.png';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Profile from './Profile';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>

        <Link to='/' className='flex items-center'>
          <img src={Logo} className='w-20' alt='' />
          <h1 className='text-2xl hidden md:block'>Pow Pow</h1>
        </Link>

        <div className='hidden lg:block'>
          <Nav />
        </div>
        
        <div className='hidden lg:block'>
          <Profile></Profile>
        </div>
        
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
