import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

export default function QNA() {
    return (
        <div className='mt-2 border-bottom'>
            <h4>Looking for specific info?</h4>
            <div className="qnaSearch">
                <BiSearchAlt2 className="qnaSearchIcon"></BiSearchAlt2>
                <input type="text" name="" id="" placeholder='Search in Reviews and QNA' className="qnaSearchbar" />
            </div>

            <h3>Customer questions & answers</h3>
            <div className="d-flex border-top">
                <div className="me-3 ">
                    <p className='fw-bold'>Question:</p>
                    <p className='fw-bold'>Answer:</p>
                </div>
                <div className="">
                    <p className='text-primary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint sunt harum obcaecati deleniti </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint sunt harum </p>
                </div>
            </div>
            <div className="d-flex border-top">
                <div className="me-3 ">
                    <p className='fw-bold'>Question:</p>
                    <p className='fw-bold'>Answer:</p>
                </div>
                <div className="">
                    <p className='text-primary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint sunt harum obcaecati deleniti </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint sunt harum </p>
                </div>
            </div>
            <div className="d-flex border-top">
                <div className="me-3 ">
                    <p className='fw-bold'>Question:</p>
                    <p className='fw-bold'>Answer:</p>
                </div>
                <div className="">
                    <p className='text-primary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint sunt harum obcaecati deleniti </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint sunt harum </p>
                </div>
            </div>
            <div className="d-flex border-top">
                <div className="me-3 ">
                    <p className='fw-bold'>Question:</p>
                    <p className='fw-bold'>Answer:</p>
                </div>
                <div className="">
                    <p className='text-primary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint sunt harum obcaecati deleniti </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint sunt harum </p>
                </div>
            </div>
            <div className="d-flex border-top">
                <div className="me-3 ">
                    <p className='fw-bold'>Question:</p>
                    <p className='fw-bold'>Answer:</p>
                </div>
                <div className="">
                    <p className='text-primary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint sunt harum obcaecati deleniti </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint sunt harum </p>
                </div>
            </div>
        </div>
    )
}