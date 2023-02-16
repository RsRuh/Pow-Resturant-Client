import React from 'react';
import { Outlet } from 'react-router-dom';
import BackTopBtn from '../components/BackTopBtn';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <BackTopBtn />
        </div>
    );
};

export default Main;