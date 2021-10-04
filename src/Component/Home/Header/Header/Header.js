import React from 'react';
import ManuBar from '../../ManuBar/ManuBar';
import Navbar from '../../Navbar/Navbar';
import MainHeader from '../MainHeader/MainHeader';
import ProductDicount from '../ProductDicount/ProductDicount';
import Store from '../Store/Store';
const Header = () => {
    return (
        <div>

            <ManuBar></ManuBar>
            <MainHeader></MainHeader>
            <ProductDicount></ProductDicount>
            <Store></Store>
        </div>
    );
};

export default Header;