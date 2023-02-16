import React from 'react';
import burger from '../assets/burger.jpg'
import pizza from '../assets/pizza.jpg'
import friedChicken from '../assets/friedChicken.jpg'
import shawarma from '../assets/shawarma.jpg'
import noodles from '../assets/noodles.jpg'
import donut from '../assets/donut.jpg'
import iceCream from '../assets/ice-cream.jpg'
import drinks from '../assets/drinks.jpg'
import { Link } from 'react-router-dom';

const Shop = () => {

    const categories = [
        { name: "Burger", about: "A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.", link: "burger", img: burger },
        { name: "Pizza", about: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.", link: "pizza", img: pizza },
        { name: "Fried Chicken", about: "Fried chicken, also known as Southern fried chicken, is a dish consisting of chicken pieces that have been coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried. The breading adds a crisp coating or crust to the exterior of the chicken while retaining juices in the meat.", link: "fried-chicken", img: friedChicken },
        { name: "Shawarma", about: "Shawarma is a popular Middle Eastern meal that is made from marinated meat, such as lamb, beef, and chicken. It is one of the world’s most popular street foods, especially in Egypt, and is now a staple at most Middle Eastern restaurants. Shawarma is a mouth-watering meal that is sure to please food and meat lovers.", link: "shawarma", img: shawarma },
        { name: "Noodles", about: "Noodles are a type of food made from unleavened dough which is either rolled flat and cut, stretched, or extruded, into long strips or strings. Noodles are a staple food in many cultures and made into a variety of shapes.", link: "noodles", img: noodles },
        { name: "Donut", about: "A donut is a type of food made from leavened fried dough. It is popular in many countries and is prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.", link: "donut", img: donut },
        { name: "Ice Cream", about: "Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches.", link: "ice-cream", img: iceCream },
        { name: "Drinks", about: "A soft drink is a drink that usually contains water, a sweetener, and a natural and/or artificial flavoring. The sweetener may be a sugar, high-fructose corn syrup, fruit juice, a sugar substitute, or some combination of these. Soft drinks may also contain caffeine, colorings, preservatives, and/or other ingredients.", link: "cold-drinks", img: drinks },
    ];


    return (

        <div className="flex py-[100px] items-center justify-center bg-secondary">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {
                    categories?.map((category, i) =>
                        <div key={i} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={category?.img} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">{category?.name}</h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{category?.about.slice(0, 75)}</p>
                                <Link to={`/foods/${category.link}`} className="rounded-full bg-crimson py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</Link>
                            </div>
                        </div>
                    )
                }


            </div>

        </div>


    );
};

export default Shop;