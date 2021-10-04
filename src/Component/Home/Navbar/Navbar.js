import React from 'react';
import photo from '../../Image/rokomari-removebg-preview (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faShoppingCart, faStore } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'

const Navbar = () => {
    return (
        <section className=" navbar-color sticky-top">
            <div className="container">
                <div className=" row align-items-center">
                    <div className="col-3">
                        <a ><img style={{ width: '200px', }} src={photo} alt="" /></a>
                    </div>
                    <div className="col-7  ">

                        <div class="input-group ">
                            <input type="text" class="form-control" id="input-search" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text" id="basic-addon2">   <FontAwesomeIcon className="fs-1 " icon={faSearch} /></span>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className=" ms-5  ">

                            <div className="d-flex">
                                <div className="d-flex ">
                                    <FontAwesomeIcon className="fs-1 " icon={faShoppingCart} />
                                    <span className="rounded-circle card-item-color p-2   text-center  ">5</span>
                                </div>
                                <div className="">
                                    <button className="  ms-4 singinBtn ">Sing in</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;