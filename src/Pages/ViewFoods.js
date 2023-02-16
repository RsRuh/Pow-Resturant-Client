import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import MemoCard from './MemoCard';
import { GoInfo } from "react-icons/go";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaSlackHash } from "react-icons/fa";
import logo from "../assets/logo.png"
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-hot-toast';

const ViewFoods = () => {

    // এখানে রিফেচ করলে কিনার পর সংখ্যা কমবে
    const foods = useLoaderData();


    const { user } = useContext(AuthContext)

    // const url = `https://rsruh-pow-pow-server.vercel.app/booked?email=${user?.email}`;

    // const { data: orders = [], refetch } = useQuery({
    //     queryKey: [user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             // headers: {
    //             //     authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             // }
    //         });
    //         const data = await res.json();
    //         return data;
    //     }

    // })



    // let price = 0

    const handleBook = item => {
        // let subtotal = localStorage.getItem('subtotal')

        // if (!subtotal) {
        //     subtotal = 0
        // }
        // price = price + item.price

        // localStorage.setItem('subtotal', price + parseFloat(subtotal))

        // console.log(price);


        const receipt = {
            customerEmail: user?.email,
            customerName: user?.displayName,
            customerPic: user?.photoURL,
            foodName: item.foodName,
            foodPrice: item.price,
            foodPic: item.foodPic,
            itemsNumber: 1,
            foodId: item._id
        }


        fetch(`https://rsruh-pow-pow-server.vercel.app/booked?id=${item._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(receipt)
        })
            .then(res => res.json())
            .then(item => {
                toast.success('Successfully toasted!')
            })
            .catch(err => console.error(err))



    }

    let remove = 0



    const handleDelete = item => {


        let subtotal = localStorage.getItem('subtotal')

        if (!subtotal) {
            subtotal = 0
        }
        remove = subtotal - (item.itemsNumber * item.foodPrice)

        localStorage.setItem('subtotal', parseFloat(remove))

        console.log(remove);

        fetch(`https://rsruh-pow-pow-server.vercel.app/delete-food?id=${item._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(deleteItem => {
                // refetch()
            })
            .catch(err => console.error(err))
    }

    console.log(foods);

    return (
        <>
            {/* <div className="p-6 mb-10 py-12 bg-[#50577A] text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-md md:text-6xl tracking-tighter font-bold">Buy
                            <br className="sm:hidden" /> 3 Items &
                            <br className="sm:hidden" /> Get One Burger Free
                        </h2>
                        <div className="space-x-2 text-center flex items-center py-2 lg:py-0">
                            <img src={logo} className='h-10 w-10' alt='' />
                            <span className="font-bold text-lg">Pow Pow</span>
                        </div>
                        <p className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400">Buy Now</p>
                    </div>
                </div>
            </div> */}

            <div className="bg-secondary text-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {foods?.map((food) => (
                            <div key={food._id} className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">

                                    <img
                                        src={food.foodPic}
                                        alt={food.foodPic}
                                        className="h-96 w-96 object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <div className='border-b pb-2 px-2'>
                                    <div className='flex justify-between items-center mb-2'>
                                        <h3 className="mt-4 text-sm">{food.foodName}</h3>
                                        <Link to={`/food/${food?._id}`}
                                            className="text-xl">
                                            <GoInfo />
                                        </Link>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className="mt-1 text-lg font-medium">{food.price}</p>
                                        <button onClick={() => handleBook(food)} className="rounded-full bg-crimson py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Add Cart</button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewFoods;