import React from 'react';
import Burger from '../assets/img/burger.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-bgC lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'

    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div data-aos="fade-right" className='flex flex-col items-center lg:items-start'>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Fresh & Spicey <br /> Are You Hungry?
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              We Take Pride in Our Food. Made of fresh & premium ingredients
            </p>
            <button className='btn btn-md bg-crimson hover:bg-secondary-hover md:btn-lg transition-all'>
              Get Some Food
            </button>
          </div>
          <div data-aos="fade-left" className='hidden  lg:flex items-center h-full'>
            <img src={Burger} className='h-[700px]' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
