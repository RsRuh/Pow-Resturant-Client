
import React from 'react';

const ViewReviews = ({ foods }) => {




    return (
        <div className="relative mt-20 mb-5">

            { foods.length && 
                <div className="relative bg-[#222831]">
                <svg
                    className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#222831]"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 54"
                >
                    <path
                        fill="currentColor"
                        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                    />
                </svg>
                <svg
                    className="absolute inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <section className="pb-[300px] px-5 pt-10 text-white">
                    <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold mb-6">Customer Reviews For This Item</h3>
                        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                            You Can Review This Food. If you like this item or don't like fall a valuable comment to improved
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">

                        {
                            foods?.map(food => <div key={food._id} className="mb-12 md:mb-0">
                                <div className="flex justify-center mb-6">
                                    <img
                                        src={food.customerImg}
                                        className="rounded-full shadow-lg w-32 h-32" alt=''
                                    />
                                </div>
                                <h5 className="text-xl font-semibold mb-4">{food.customerName}</h5>
                                <h6 className="font-semibold text-sm text-blue-600 mb-4">{food.customerEmail}</h6>
                                <p className="mb-4">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="quote-left"
                                        className="w-6 pr-2 inline-block"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                        ></path>
                                    </svg>
                                    {food.feedback}
                                </p>
                                <ul className="flex justify-center items-center mb-0">
                                    <p>{food.star}</p>
                                    <li>
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="star"
                                            className="w-4 text-yellow-500"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                            ></path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>)
                        }
                    </div>
                </section>
            </div>}
        </div>
    );
};

export default ViewReviews;