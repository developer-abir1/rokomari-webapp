import React from 'react';
import Store1 from '../../../Image/stoc01.PNG'
import Store2 from '../../../Image/stock2.PNG'
import Store3 from '../../../Image/stock4.PNG'

const Store = () => {
    return (
        <section className="container mt-3">
            <div className="row  ">
                <div className="col-4 col-md-4">
                    <img src={Store1} alt="" srcset="" />
                </div>
                <div className="col-4 col-md-4">
                    <img src={Store2} alt="" srcset="" />
                </div>
                <div className="col-4 col-md-4">
                    <img src={Store3} alt="" srcset="" />
                </div>
            </div>
        </section>
    );
};

export default Store;