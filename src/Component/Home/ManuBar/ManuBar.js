import React from 'react';
import './ManuBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCoffee, faSearch, faShoppingCart, faStore } from '@fortawesome/free-solid-svg-icons';

const ManuBar = () => {
    return (
        <section className="navbar-color">
            <div className="">
                <div className="text-center   item-title ">
                    <ul class="nav nav-tabs manuItem ">
                        <li class="nav-item">
                            <a class="nav-link ms-3 fs-5  active" aria-current="page" href="#">বই</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link ms-3 fs-5  " href="#">ইলেক্ট্রনিক্স</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-3 fs-5 " href="#">স্টেশনারী ও অন্যান্য</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-3 fs-5 " href="#"><img style={{ width: '20px' }} src="https://www.rokomari.com/static/200/images/icons8-gift-48.png" alt="" srcset="" /> গিফট ফাইন্ডার</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-3 fs-5 " href="#">প্রাতিষ্ঠানিক অর্ডার</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-3 fs-5 " href="#">অফার সমূহ </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-3 fs-5 " href="#">ব্লগ </a>
                        </li>

                    </ul>

                </div>
                <div class="tab-content d-flex justify-content-center " id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <ul class="nav ">
                            <li class="nav-item ">
                                <a class="nav-link   ms-3   fs-6" style={{ color: 'black' }} href="#">লেখক  <FontAwesomeIcon icon={faAngleDown} /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link   ms-3   fs-6" style={{ color: 'black' }} href="#">বিষয়  <FontAwesomeIcon icon={faAngleDown} /></a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link   ms-3   fs-6" style={{ color: 'black' }} href="#">প্রকাশনী  <FontAwesomeIcon icon={faAngleDown} /> </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link   ms-3   fs-6" style={{ color: 'black' }} href="#">স্টকের প্রোডাক্ট সমূহ </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link   ms-3   fs-6" style={{ color: 'black' }} href="#">ইসলামি বই </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link   ms-3   fs-6" style={{ color: 'black' }} href="#">বইমেলা ২০২১ </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link   ms-3   fs-6" style={{ color: 'black' }} href="#">বেস্টসেলার বই  </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link   ms-3   fs-6" style={{ color: 'black' }} href="#"> উপন্যাস </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link   ms-3   fs-6" style={{ color: 'black' }} href="#">বিজ্ঞানবাক্স </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManuBar;