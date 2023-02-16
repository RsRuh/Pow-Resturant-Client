import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const AddFood = () => {

    const { user } = useContext(AuthContext);

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const foodName = form.foodName.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const message = form.message.value;
        const foodPic = form.foodPic.files;



        const formData = new FormData()
        formData.append('image', foodPic[0])

        const url = 'https://api.imgbb.com/1/upload?key=0122ff25478b0ae6e43041bea3e46a2f';
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData.data.display_url);
                const foodInfo = {
                    foodName: foodName,
                    category: category,
                    price: parseFloat(price),
                    quantity: parseFloat(quantity),
                    message: message,
                    foodPic: imageData.data.display_url,
                    shafeName: user?.displayName,
                    shafeEmail: user?.email,
                    shafePic: user?.photoURL,
                    status: 'available',
                }

                fetch('https://rsruh-pow-pow-server.vercel.app/foods', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(foodInfo)
                })
                    .then(res => res.json())
                    .then(user => {
                        toast.success('Thanks Add Product')
                        form.reset()
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })


    }

    return (
        <div>
            <div className="px-8 py-2 bg-gray-900 text-gray-100">
                <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
                    <div>
                        <span>Get up to 50% Bonus your first order of Customer.</span>
                        <Link to="/add-food" className="underline px-2">Add Food</Link>today!
                    </div>
                    <button className="items-center gap-2 hidden md:flex">
                        <svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
                            <path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
                        </svg>
                        <span className="hover:underline focus-visible:underline">Gift Cards</span>
                    </button>
                </div>
            </div>
            <div className='flex bg-bgF items-center h-[90vh]'>
                <form onSubmit={handleAddProduct} className='w-1/2 p-10 mt-10 grid gap-6 mx-auto'>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="" htmlFor="foodName">Food Name</label>
                            <input
                                className="w-full rounded-lg border-black border-2 p-3 md:text-2xl"
                                placeholder="Food Name"
                                type="text"
                                id="foodName"
                                name='foodName'
                            />
                        </div>

                        <div className=''>
                            <label className="" htmlFor="category">Category</label>
                            <select name='category' className="select select-bordered border-black border-2 py-2.5 rounded-md pl-2 w-full md:text-2xl relative flex items-center">
                                <option value='burger'>Burger</option>
                                <option value='pizza'>Pizza</option>
                                <option value='fried-chicken'>Fried Chicken</option>
                                <option value='shawarma'>Shawarma</option>
                                <option value='noodles'>Noodles</option>
                                <option value='donut'>Donut</option>
                                <option value='ice-cream'>Ice Cream</option>
                                <option value='cold-drinks'>Cold Drinks</option>
                            </select>
                        </div>



                        <div>
                            <label className="" htmlFor="price">Price</label>
                            <input
                                className="w-full rounded-lg border-black md:text-2xl border-2 p-3 text-sm"
                                placeholder="Food Price"
                                type="number"
                                id="price"
                                name='price'
                            />
                        </div>
                        <div>
                            <label className="" htmlFor="quantity">Quantity</label>
                            <input
                                className="w-full md:text-2xl rounded-lg border-black border-2 p-3 text-sm"
                                placeholder="Food Quantity"
                                type="number"
                                id="quantity"
                                name='quantity'
                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="foodPic" className="block">Photo</label>
                            <div className='border-black border-2 pl-5 rounded-md'>
                                <input type="file" name='foodPic' className="file-input md:text-2xl py-2 w-full max-w-xs" />
                            </div>
                        </div>

                        <div className='col-span-2'>
                            <div>
                                <label htmlFor="userPhoto" className="mt-4 block">Chef Info:</label>
                                <div className='flex items-center justify-center gap-3'>
                                    <div className=''>
                                        <img className='rounded-full h-14 w-14' src={user?.photoURL} alt='' />
                                    </div>
                                    <div className='rounded-md'>
                                        <input
                                            className="w-full rounded-lg border-black border-2 p-3 text-sm"
                                            placeholder={user?.displayName}
                                            type="number"
                                            id="shafeName"
                                            disabled
                                        />
                                    </div>
                                    <div className='rounded-md'>
                                        <input
                                            className="w-full rounded-lg border-black border-2 p-3 text-sm"
                                            placeholder={user?.email}
                                            type="email"
                                            id="shafeEmail"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <label className="sr-only" htmlFor="message">Description</label>
                            <textarea
                                className="w-full rounded-lg md:text-2xl border-black border-2 p-3 text-sm"
                                placeholder="Description"
                                rows="8"
                                id="message"
                                name='message'
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                        >
                            <span
                                className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4"
                            >
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>

                            <span className="text-sm font-medium transition-all group-hover:ml-4">
                                Add Food
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;