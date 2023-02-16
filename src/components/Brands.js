import React from 'react';
import { brands } from '../data';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-white flex items-center'>
      <div
        className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'
      >
        {brands.map((brand, idx) => {
          return (
            <div
              key={idx}
              data-aos="fade-right"
            >
              <img src={brand.img} className='w-32' alt='' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
