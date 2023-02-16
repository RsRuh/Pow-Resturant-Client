import React from 'react';
import AnimatedText from 'react-animated-text-content';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Offers = () => {
    return (
        <div className="flex justify-center bg-secondary items-center">
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                <div role="main" className="flex flex-col items-center justify-center">
                    <h1 className='md:text-5xl text-3xl'>
                            This Week Offers
                    </h1>
                    <p className="text-base leading-normal text-center text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
                </div>
                <div className="lg:flex items-stretch md:mt-12 mt-8">
                    <div className="lg:w-1/2">
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                            <div data-aos="fade-down" className="sm:w-1/2 relative">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 January 2023</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-2xl font-semibold 5 text-white">15% Discount</h2>
                                        <p className="text-base leading-4 text-white mt-2">At <span className='text-red-600'>large Burger</span></p>
                                        <Link to='#' className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">

                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
                                        </Link>
                                    </div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="w-full" alt="chair" />
                            </div>
                            <div data-aos="fade-down" className="sm:w-1/2 sm:mt-0 mt-4 relative">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">26 January 2023</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-2xl font-semibold 5 text-white">25% Discount</h2>
                                        <p className="text-base leading-4 text-white mt-2">At 12inch Pizza</p>
                                        <Link to='#' className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
                                        </Link>
                                    </div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="w-full" alt="wall design" />
                            </div>
                        </div>
                        <div data-aos="fade-up" className="relative">
                            <div>
                                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">14 February 2023</p>
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-2xl font-semibold 5 text-white">buy One Gate One</h2>
                                    <p className="text-base leading-4 text-white mt-2">At <span className='text-red-600'>Black Burger</span></p>
                                    <Link to="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
                                    </Link>
                                </div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
                            <img className="w-full mt-4 sm:hidden" src="https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="sitting place" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                        <div data-aos="fade-down" className="relative">
                            <div>
                                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">14 February 2023</p>
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-2xl font-semibold 5 text-white">30% Discount</h2>
                                    <p className="text-base leading-4 text-white mt-2">At <span className='text-red-600'>Thai Noodles</span></p>
                                    <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
                                    </a>
                                </div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1549896443-e6d347606bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="sitting place" className="w-full sm:block hidden" />
                            <img className="w-full sm:hidden" src="https://images.unsplash.com/photo-1549896443-e6d347606bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="sitting place" />
                        </div>
                        <div data-aos="fade-up" className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                            <div className="relative w-full">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2023</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-white">Special Day</h2>
                                        <p className="text-base leading-4 text-red-600 mt-2">Castello Monaci</p>
                                        <Link to="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
                                        </Link>
                                    </div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1618611627105-74f7567bc6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="w-full" alt="chair" />
                            </div>
                            <div className="relative w-full sm:mt-0 mt-4">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 June 2023</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-white">Soft Drinks</h2>
                                        <p className="text-base leading-4 text-red-600 shadow-md mt-2">RIOT Energy</p>
                                        <Link to="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
                                        </Link>
                                    </div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1649261191610-cd7b6e297ca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="w-full" alt="wall design" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
