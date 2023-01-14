import React from 'react'

export default function PriceCard() {
    return (
        <div className="">
            <div className='border w-100 p-3 rounded' style={{ fontSize: "12px" }}>
                <p >₹ <span style={{ fontSize: "35px" }}>489</span>00</p>
                <p >FREE delivery <span className='fw-bold'> Wednesday, 18 January.</span> Order within <span className='text-success'> 11 hrs 58 mins.</span> Details</p>
                <p style={{ fontSize: "18px" }} className='mb-0 text-success'>In Stock.</p>
                <p >
                    Sold by Cocoblu Retail and Fulfilled by Amazon.
                </p>
                <div className="d-flex">
                    <p className='mb-0'>Quantity</p>
                    <select>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                </div>

                <div className="d-flex flex-column mt-2 border-bottom">
                    <button type="button" className="btn btn-warning" style={{ fontSize: "12px" }}>Add to Cart</button>
                    <button type="button" className="mt-1 btn btn-info" style={{ fontSize: "12px" }}>Order Now</button>
                    <div className="mt-2 d-flex ">
                        <input type="checkbox" className='me-2' name="" id="" />
                        Add Gift Options
                    </div>
                </div>
            </div>

            <div className='border w-100 p-3 mt-2 rounded' style={{ fontSize: "12px" }}>
                <p className='mb-0 border-bottom'>Other Sellers on Amazon</p>
                <div className="d-flex justify-content-between">
                    <p className='text-danger mb-0' style={{ fontSize: "25px" }}>₹899.00</p>
                    <button type="button" className="btn btn-warning p-0" style={{ fontSize: "10px" }}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}