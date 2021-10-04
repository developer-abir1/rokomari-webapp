import React from 'react';
import Footer from '../../Footer/Footer';
import Collaction from '../Collaction/Collaction';
import Header from '../Header/Header/Header';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product/Product';
import Writter from '../Writer/Writter';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Product></Product>
            <Writter></Writter>
            <Collaction></Collaction>
            <Footer></Footer>
        </div>
    );
};

export default Home;