import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { CiCircleRemove } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Orders = () => {

    const { user } = useContext(AuthContext)

    const url = `https://rsruh-pow-pow-server.vercel.app/booked?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: [user],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }

    })

    let totalPrice = 0;

    const handleDelete = () => {

    }


    return (
        <div className='pt-[100px] bg-secondary'>
            <div className='md:block hidden'>
                <table class="w-full bg-white border-b border-gray-200">
                    <thead>
                        <tr class="text-sm font-medium text-gray-700 border-b border-gray-200">
                            <td class="py-4 px-4 text-center">Product</td>
                            <td class="py-4 px-4 text-center">Unit Price</td>
                            <td class="py-4 px-4 text-center">Quantity</td>
                            <td class="py-4 px-4 text-center">Total</td>
                            <td class="py-4 px-4 text-center">Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => {
                                totalPrice += order.foodPrice * order.itemsNumber
                                console.log(totalPrice)
                                return (
                                    <tr key={order._id}
                                        class="hover:bg-gray-100 transition-colors group"
                                    >
                                        <td class="flex gap-x-4 items-center py-4 pl-10">
                                            <img
                                                src={order.foodPic}
                                                alt=""
                                                class="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200" />
                                            <div>
                                                <h1 class="text-lg font-semibold text-gray-700">
                                                    {order.foodName}
                                                </h1>
                                            </div>
                                        </td>
                                        <td class="font-medium text-center">${order.foodPrice}</td>
                                        <td class="font-medium text-center">{order.itemsNumber}</td>
                                        <td class="text-center">
                                            <span class="font-medium">{order.foodPrice * order.itemsNumber}</span>
                                        </td>
                                        <td>
                                            <div class="flex gap-x-2 justify-center items-center">
                                                <CiCircleRemove className='text-2xl' />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <hr />
                <div className='grid grid-cols-2 bg-white pt-5'>
                    <div className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                        <input
                            placeholder="COUPON CODE"
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-3transition duration-200 border-2 rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                        />
                        <button
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Apply
                        </button>
                    </div>
                    <div className='mb-10 flex justify-center'>
                        <div className='grid gap-4'>
                            <h1 className='text-black'>Total Price : {totalPrice}</h1>

                            <a
                                class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                href="/download"
                            >
                                <span
                                    class="absolute inset-0 border border-red-600 group-active:border-red-500"
                                ></span>
                                <span
                                    class="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                >
                                    Payment
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-80 lg:w-80 md:hidden'>
                <div
                    className="relative block w-full lg:sticky lg:top-10 px-3 py-8 bg-gray-100 shadow">
                    {orders.length ?
                        <div className="mt-6 space-y-6">
                            <ul className="space-y-4">
                                {
                                    orders?.map(order => <li key={order?._id} className="flex items-center">
                                        <img
                                            src={order.foodPic}
                                            alt=""
                                            className="object-cover w-16 h-16 rounded"
                                        />

                                        <div className="ml-4">
                                            <h3 className="text-sm text-gray-900">{order.foodName}</h3>

                                            <div>
                                                <p className="inline text-sm">Price: </p>
                                                <p className="inline text-sm">${order.foodPrice}</p>
                                                <p className="inline text-xs px-1">X</p>
                                                <p className="inline text-sm">{order.itemsNumber}</p>
                                            </div>

                                        </div>

                                        <div className="flex items-center justify-end flex-1 gap-2">
                                            <button onClick={() => handleDelete(order)} className="text-gray-600 transition hover:text-red-600">

                                                <span className="sr-only">Remove item</span>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </li>)
                                }

                            </ul>

                            <div className="space-y-4 text-center">
                                <Link
                                    to="#"
                                    className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="flex flex-col justify-center">
                                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Todays Best Deal</h1>
                                <p className="text-base lg:text-xl text-gray-800">
                                    Buy one <span className="font-bold">Get one</span>
                                </p>
                            </div>
                            <div className="flex justify-end">
                                {/* <img src={shawarma} alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" /> */}
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>

    );
};

export default Orders;