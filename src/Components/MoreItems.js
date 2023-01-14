import React from 'react'
import Red from './../Assets/red_1.jpg'
import Blue from './../Assets/black_1.jpg'
import Black from './../Assets/blue_1.jpg'
export default function MoreItems() {
    return (
        <div className='mt-1 border-bottom' style={{ fontSize: "12px" }} >
            <h6>More Items to explore </h6>
            <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column ms-3">
                    <img src={Red} style={{ height: "160px", width: "160px" }} alt="" />
                    <p className='text-primary'>
                        Van Heusen Athleisure Men Polo T-Shirt - <br /> Cotton Rich - Ultra Soft, Short Sleeve,
                        <br /> 4.1 out of 5 stars 3,137
                    </p>
                    <span style={{ fontSize: "16px" }} className="text-danger "> ₹949.00</span>
                    FREE Delivery
                </div>

                <div className="d-flex flex-column ms-3">
                    <img src={Black} style={{ height: "160px", width: "160px" }} alt="" />
                    <p className='text-primary'>
                        Van Heusen Athleisure Men Polo T-Shirt - <br /> Cotton Rich - Ultra Soft, Short Sleeve,
                        <br /> 4.1 out of 5 stars 3,137
                    </p>
                    <span style={{ fontSize: "16px" }} className="text-danger "> ₹949.00</span>
                    FREE Delivery
                </div>

                <div className="d-flex flex-column ms-3">
                    <img src={Blue} style={{ height: "160px", width: "160px" }} alt="" />
                    <p className='text-primary'>
                        Van Heusen Athleisure Men Polo T-Shirt - <br /> Cotton Rich - Ultra Soft, Short Sleeve,
                        <br /> 4.1 out of 5 stars 3,137
                    </p>
                    <span style={{ fontSize: "16px" }} className="text-danger "> ₹949.00</span>
                    FREE Delivery
                </div>

                <div className="d-flex flex-column ms-3">
                    <img src={Red} style={{ height: "160px", width: "160px" }} alt="" />
                    <p className='text-primary'>
                        Van Heusen Athleisure Men Polo T-Shirt - <br /> Cotton Rich - Ultra Soft, Short Sleeve,
                        <br /> 4.1 out of 5 stars 3,137
                    </p>
                    <span style={{ fontSize: "16px" }} className="text-danger "> ₹949.00</span>
                    FREE Delivery
                </div>

                <div className="d-flex flex-column ms-3">
                    <img src={Black} style={{ height: "160px", width: "160px" }} alt="" />
                    <p className='text-primary'>
                        Van Heusen Athleisure Men Polo T-Shirt - <br /> Cotton Rich - Ultra Soft, Short Sleeve,
                        <br /> 4.1 out of 5 stars 3,137
                    </p>

                    <span style={{ fontSize: "16px" }} className="text-danger "> ₹949.00</span>
                    FREE Delivery
                </div>
                <div className="d-flex flex-column ms-3">
                    <img src={Red} style={{ height: "160px", width: "160px" }} alt="" />
                    <p className='text-primary'>
                        Van Heusen Athleisure Men Polo T-Shirt - <br /> Cotton Rich - Ultra Soft, Short Sleeve,
                        <br /> 4.1 out of 5 stars 3,137
                    </p>

                    <span style={{ fontSize: "16px" }} className="text-danger "> ₹949.00</span>
                    FREE Delivery
                </div>
            </div>
        </div >
    )
}