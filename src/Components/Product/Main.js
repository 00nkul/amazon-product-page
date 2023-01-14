import React from 'react'
import './Main.css'
import ProductInfo from './ProductInfo'
import PriceCard from '../PriceCard'
import MoreItems from '../MoreItems'
import Banner1 from './../../Assets/b1.jpg'
import Banner2 from './../../Assets/b2.jpg'
import Banner3 from './../../Assets/b3.jpg'
import QNA from '../QNA'
import Reviews from '../Reviews'
import ProductImage from '../ProductImage'

export default function Main() {
    return (
        <div className='main mt-3' style={{ height: '80vh' }}>
            <div className="row">
                <div className="col-6" >
                    <ProductImage />
                </div>
                <div className="col-4" >
                    <ProductInfo />
                </div>
                <div className="col-2 ">
                    <PriceCard />
                </div>
            </div>

            <div className="mt-3 border-bottom">
                <p>Special offers and product promotions</p>
                <ul>
                    <li>Buy 2 Get 5% Off, Buy 3 Get 10% Off Here's how</li>
                    <li>Prime Savings : Additional Flat INR 1000 Instant Discount on SBI Credit Card Trxn. Min purchase value INR 29999 Here's how</li>
                    <li>Prime Savings : 10% Instant Discount up to INR 1500 on SBI Credit Card EMI Trxn. Min purchase value INR 5000 Here's how</li>
                    <li>Prime Savings : 10% Instant Discount up to INR 1250 on SBI Credit Card Non-EMI Trxn. Min purchase value INR 5000 Here's how</li>
                    <li>No cost EMI available on select cards. Please check 'EMI options' above for more details. Here's how</li>
                    <li>Get GST invoice and save up to 28% on business purchases. Sign up for free Here's how</li>
                </ul>
            </div>

            <MoreItems />
            <FromManu />
            <QNA />
            <Reviews />
        </div>
    )
}


function FromManu() {
    return (
        <div className='border-bottom mt-2 container' >
            <h4 >From the manufacturer</h4>
            <div className="d-flex flex-column ">
                <img className='mt-4' src={Banner1} style={{ height: '300', width: '970' }} alt="" />
                <img className='mt-4' src={Banner2} style={{ height: '300', width: '970' }} alt="" />
                <img className='mt-4' src={Banner3} style={{ height: '300', width: '970' }} alt="" />
                <img className='mt-4' src={Banner1} style={{ height: '300', width: '970' }} alt="" />
            </div>
        </div>
    )
}