import React from 'react'
import './Main.css'
import { TbDiscount2 } from 'react-icons/tb'
import Black from './../../Assets/black.jpg'
import Red from './../../Assets/red.jpg'
import Blue from './../../Assets/blue.jpg'

export default function ProductInfo() {
    return (
        <div className='productInfo '>
            <a href='#'>Visit the Van Heusen Store</a>
            <p className='pName'>Van Heusen Men's Regular Fit Polo Shirt</p>

            <div className="d-flex align-items-center border-bottom justify-content-center ratings">
                <div className="stars">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                </div>
                <p>20,000 ratings | 125 anwered questions</p>
            </div>
            <div className="border-bottom">
                <div className="price">
                    <span className='discount'> -56%</span>  ₹
                    <span className='sellP'>489</span> <br />
                    <p>M.R.P.: <span className='text-decoration-line-through'> ₹1,099</span></p>
                </div>
                <p>Inclusive of all taxes</p>
            </div>

            <div className="offers border-bottom">
                <div className="mt-2 d-flex align-items-center  justify-content-left">
                    <TbDiscount2 className='fs-3' />
                    <p className='ms-2 mb-0'>Offers</p>
                </div>
                <div className="offerCards  mt-2 mb-3 d-flex align-items-center justify-content-center">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            <div className="w-100 p-3 d-flex align-items-center justify-content-between icOffers">
                <div className="icon d-flex flex-column" style={{ height: "35px", width: "35px", borderRadius: "50%" }} >
                    <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="" />
                    <span style={{ color: "#007185" }}>Free Delivery</span>
                </div>
                <div className="icon d-flex flex-column" style={{ height: "35px", width: "35px", borderRadius: "50%" }} >
                    <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" alt="" />
                    <span style={{ color: "#007185" }}>Payon Delivery</span>
                </div>
                <div className="icon d-flex flex-column" style={{ height: "35px", width: "35px", borderRadius: "50%" }} >
                    <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="" />
                    <span style={{ color: "#007185" }}>30daysRetuen& Exchange</span>
                </div>
                <div className="icon d-flex flex-column" style={{ height: "35px", width: "35px", borderRadius: "50%" }} >
                    <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" alt="" />
                    <span style={{ color: "#007185" }}>Amazon Delivered</span>
                </div>
            </div>
            <div className="mt-4 border-bottom ">
            </div>
            <div className="mt-3 p-3 border-bottom">
                <p className='fw-bold'>Size :</p>
                <select name="size" id="">
                    <option value="Select" disabled>Select</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                </select>
                <p className='fw-bold'>Color :</p>
                <div className="colorImages">
                    <img src={Black} alt="" srcset="" />
                    <img src={Red} alt="" srcset="" />
                    <img src={Blue} alt="" srcset="" />
                    <img src={Black} alt="" srcset="" />
                </div>
                <div className="colorImages">
                    <img src={Black} alt="" srcset="" />
                    <img src={Red} alt="" srcset="" />
                    <img src={Blue} alt="" srcset="" />
                    <img src={Black} alt="" srcset="" />
                </div>
                <p className='mt-2'>Based on purchases by customers who wear your size,<span className='fw-bold'> S will fit you best.</span></p>
            </div>
            <div className="border-bottom">
                <p className='fw-bold' style={{ fontSize: "14px" }}>Similar to Consider</p>
                <div className="d-flex">
                    <img src={Blue} style={{ height: "85px" }} alt="" />
                    <div className="ms-1">
                        <p className='text-primary' style={{ marginBottom: "0px" }}>Cazibe Regular Fit Men's T-Shirt</p>
                        <div className="stars">
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                        </div>
                        <p className='text-danger'>₹399.00 </p>

                    </div>
                </div>
                <p className='fw-bold mt-2' style={{ fontSize: "16px" }}>Product Details</p>
                <div className="d-flex">
                    <p className='fw-bold'>Material <br /> Composition</p>
                    <p className='ms-2'>60% Cotton, 40% Polyester</p>
                </div>
                <div className="d-flex">
                    <p className='fw-bold'>Style </p>
                    <p className='ms-5'>Western</p>
                </div>
                <div className="d-flex">
                    <p className='fw-bold'>Neck Style </p>
                    <p className='ms-3'>Polo</p>
                </div>
                <div className="d-flex">
                    <p className='fw-bold'>Pattern </p>
                    <p className='ms-4'>Solid</p>
                </div>
            </div>
            <div className="border-bottom">
                <p className='fw-bold mt-2' style={{ fontSize: "16px" }} >About this item</p>
                <ul className='ps-1'>
                    <li>Occasion : Leisure Sport</li>
                    <li>Pattern : Solid</li>
                    <li>Fit :Regular Fit</li>
                    <li>Material: 60%Cotton40%Polyester</li>
                    <li>Sleeves : Half Sleeves</li>
                </ul>
            </div>

            <div className="border-bottom">
                <p className='fw-bold mt-2' style={{ fontSize: "16px" }} >Additional Information</p>
                <div className="d-flex">
                    <p className='fw-bold'>Manufacturer</p>
                    <p className='ms-2'>ABFRL, ABFRL, Building No.288/2 ,Begur,Bangalore-560068</p>
                </div>
                <div className="d-flex">
                    <p className='fw-bold'>Packer</p>
                    <p className='ms-5'>ABFRL, ABFRL, Building No.288/2 ,Begur,Bangalore-560068</p>
                </div>
                <div className="d-flex">
                    <p className='fw-bold'>Item Weight</p>
                    <p className='ms-3'>250 g</p>
                </div>
                <div className="d-flex">
                    <p className='fw-bold'>Generic Name </p>
                    <p className='ms-4'>T-Shirt</p>
                </div>
            </div>
        </div>
    )
}

function Card() {
    return (
        <div className="border shadow crd" style={{ flex: 1, width: "100px" }}>
            Partner Offers <br />
            Buy 3 Get 5% Off,<br />
            Buy 4 Get 10% Off <br />
            View products <br />
            <span style={{ color: "#007185" }}> 2 offers {'>'}</span>
        </div>
    )
}