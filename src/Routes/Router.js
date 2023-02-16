import { createBrowserRouter } from "react-router-dom";
import DashDetails from "../components/DashDetails";
import Payment from "../components/Payment/Payment";
import Dashboard from "../layouts/Dashboard";

import Main from "../layouts/Main";
import AddFood from "../Pages/AddFood";
import AllUsers from "../Pages/AllUsers";
import Home from "../Pages/Home";
import Orders from "../Pages/Orders";
import Shop from "../Pages/Shop";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import ViewFood from "../Pages/ViewFood";
import ViewFoods from "../Pages/ViewFoods";


export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/shop', element: <Shop></Shop>
            },
            {
                path: '/login', element: <Signin></Signin>
            },
            {
                path: 'foods/:category', element: <ViewFoods></ViewFoods>,
                loader: ({ params }) => fetch(`https://rsruh-pow-pow-server.vercel.app/foods?category=${params.category}`)
            },
            {
                path: 'food/:id', element: <ViewFood></ViewFood>,
                loader: ({ params }) => fetch(`https://rsruh-pow-pow-server.vercel.app/food?id=${params.id}`)
            },
            {
                path: '/orders', element: <Orders></Orders>
            },
            {
                path: '/payments/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://rsruh-pow-pow-server.vercel.app/bookings/${params.id}`)
            },
            {
                path: '/signup', element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard', element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard', element: <DashDetails></DashDetails>
            },
            {
                path: '/dashboard/add-food', element: <AddFood></AddFood>
            },
            {
                path: '/dashboard/all-users', element: <AllUsers></AllUsers>
            },
        ]
    }
])