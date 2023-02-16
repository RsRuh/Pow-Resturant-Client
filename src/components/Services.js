import React from 'react';
import line from '../assets/img/services/line.jpg'
import { services } from '../data';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            CORE FEATURS
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className='grid lg:grid-cols-3 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div data-aos="fade-up" className='bg-primary p-6 rounded-2xl' key={index}>
                <div className='h-20 flex justify-center items-center my-10 text-[28px]'>
                  <img src={icon} alt={name} />
                </div>
                <h4 className='text-3xl text-center font-medium mb-2'>{name}</h4>
                <div className='flex justify-center items-center my-3 text-[28px]'>
                  <img src={line} alt={name} />
                </div>
                <p className='text-center'>{description}</p>
                <div className='flex justify-center items-center my-10'>
                  <button>Read More</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
