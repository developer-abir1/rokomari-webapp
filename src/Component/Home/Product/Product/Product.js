import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductCard.css'

const Product = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="container mt-5  product-banner">

            <h2 className="text-start mb-2 p-3">Recently Sold Products</h2>
            <Carousel responsive={responsive}>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h6>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/rokimg_20140931_14539.gif" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-title">বাবু - ৪</h6>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk300</p>
                                        <p className="ms-2">Tk200</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/4f583f825_209998.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-title">পার্সোনাল ব্র্যান্ডিং
                                        মো. তাজদীন হাসান</h6>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/362cdb8a9_194749.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-title">সিক্রেটস অব জায়োনিজম : বিশ্বব্যাপী জায়োনিস্ট ষড়যন্ত্রের ভেতর-বাহির</h6>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">tk635</p>
                                        <p className="ms-2">Tk100</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/imgrok_47684.GIF" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">রাষ্ট্রবিজ্ঞান :  তত্ত্ব ও নীতিমালা
                                        ড. মোঃ মকসুদুর রহমান</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk600</p>
                                        <p className="ms-2">Tk1000</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row  ">
                        <div class="col ">
                            <div class="card  productItems" >
                                <img style={{ width: '150px' }} src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">হাতে কলমে জাভাস্ক্রিপ্ট
                                        জুনায়েদ আহমেদ</h5>
                                    <div class="d-flex justify-content-center">
                                        <p className="text-decoration-line-through">Tk500</p>
                                        <p className="ms-2">Tk900</p>
                                    </div>
                                    <button className="btn btn-primary view-btn"> ADD CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>

            </Carousel>
        </section>
    );
};

export default Product;