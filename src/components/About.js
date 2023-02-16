import React from 'react';
import Image from '../assets/img/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
  return (
    <section className='section bg-primary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            data-aos="fade-up"
            className='object-cover w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div data-aos="fade-up" className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                LOCATED IN A SMALL TOWN
              </h2>
              <p className='mb-4 text-crimson'>
                Made of fresh & premium ingredients
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                neque harum velit molestiae dignissimos distinctio dolorum nisi
                labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus.
              </p>
            </div>
            <button className='btn btn-md bg-crimson hover:bg-secondary-hover transition-all'>
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
