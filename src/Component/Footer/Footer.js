import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeadset, faSearch, faShoppingCart, faStore } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <section className=" footer-contaier  ">
            <div className="row justify-content-between ">
                <div className="col-3 mt-5">
                    <img src="" alt="" />
                    <p> <FontAwesomeIcon className="  " style={{ color: '#414237c2' }} icon={faHeadset} /> hotline  017564244</p>
                    <p>01756424416456</p>
                    <p>01756424421364</p>
                    <p>01756424456+</p>
                    <p> <FontAwesomeIcon className="  " style={{ color: '#414237c2' }} icon={faHandshake} />  Corporate  017564244</p>

                    <div class="social-links">
                        <h5>Stay Connected</h5>
                        <FontAwesomeIcon className="fs-1 ms-2 " style={{ color: 'blue' }} icon={faFacebook} />
                        <FontAwesomeIcon className="fs-1 ms-2 " style={{ color: 'red' }} icon={faYoutube} />
                        <FontAwesomeIcon className="fs-1 ms-2 " style={{ color: 'pink' }} icon={faInstagram} />
                        <FontAwesomeIcon className="fs-1 ms-2 " style={{ color: 'blue' }} icon={faLinkedin} />
                    </div>
                </div>
                <div className="col-4 mt-5">
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <ul>
                                <h5>Home</h5>
                                <li>Book</li>
                                <li>Electronics</li>
                                <li>Accessories</li>
                                <li>Gift Card</li>
                                <li>Stationery</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <h5>Home</h5>
                                <li>Book</li>
                                <li>Electronics</li>
                                <li>Accessories</li>
                                <li>Gift Card</li>
                                <li>Stationery</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <h5>Home</h5>
                                <li>Book</li>
                                <li>Electronics</li>
                                <li>Accessories</li>
                                <li>Gift Card</li>
                                <li>Stationery</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <h5>Home</h5>
                                <li>Book</li>
                                <li>Electronics</li>
                                <li>Accessories</li>
                                <li>Gift Card</li>
                                <li>Stationery</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <h5>Home</h5>
                                <li>Book</li>
                                <li>Electronics</li>
                                <li>Accessories</li>
                                <li>Gift Card</li>
                                <li>Stationery</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <h5>Home</h5>
                                <li>Book</li>
                                <li>Electronics</li>
                                <li>Accessories</li>
                                <li>Gift Card</li>
                                <li>Stationery</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-3 mt-5">
                    <div class="facebook-page">
                        <p>Like us on Facebook</p>

                    </div>
                    <div class="app-icon">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TXEYUzOi6LQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;