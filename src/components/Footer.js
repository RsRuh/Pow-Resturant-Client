import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-crimson text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div className='flex items-center'>
            <img src={Logo} className='h-40' alt='' />
            <p className='text-white text-4xl'>Rs Ruhul</p>
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 Cristian Mihai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
