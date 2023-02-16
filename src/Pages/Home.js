import React from 'react';
import About from '../components/About';
import Brands from '../components/Brands';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <Hero />
            <Offers></Offers>
            <About />
            <Brands />
            <Services />
            <Testimonials />
            <Contact />
            {/* <Skills /> */}
        </div>
    );
};

export default Home;