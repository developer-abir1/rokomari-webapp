import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faShoppingCart, faStore } from '@fortawesome/free-solid-svg-icons';
const ProductDicount = () => {
    return (
        <div>
            <p className="fixted"> রেফার করলেই ৩০০+২০০=৫০০  পয়েন্টস </p>
            <div>

                <div className="d-flex card-icon  ">
                    <FontAwesomeIcon className="fs-1 " icon={faShoppingCart} />
                    <span className="card-item-color rounded-circle p-2">5</span>



                </div>

            </div>
        </div>
    );
};

export default ProductDicount;