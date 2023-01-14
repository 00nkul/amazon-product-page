import React, { useState } from 'react'
import Front from './../Assets/Product/front.jpg'
import Back from './../Assets/Product/back.jpg'
import Chair from './../Assets/Product/chair.jpg'
import CloseUp from './../Assets/Product/closeup.jpg'
import Hand from './../Assets/Product/hand.jpg'
import Side from './../Assets/Product/side.jpg'

export default function ProductImage() {
    const [address, setAddress] = useState(Front);
    const [modalimage, setModalimage] = useState(Front);
    const [showModal, setShowModal] = useState(false);
    const [zoom, setZoom] = useState(false);
    const getImage = (e) => {
        switch (e) {
            case 'Front':
                return Front;
            case 'Back':
                return Back;
            case 'Chair':
                return Chair;
            case 'CloseUp':
                return CloseUp;
            case 'Hand':
                return Hand;
            case 'Side':
                return Side;
            default:
                break;
        }
    }
    const handleEvent = (e) => {
        console.log(e, ' eeee ');
        switch (e) {
            case 'Front':
                setAddress(Front);
                break;
            case 'Back':
                setAddress(Back);
                break;
            case 'Chair':
                setAddress(Chair);
                break;
            case 'CloseUp':
                setAddress(CloseUp);
                break;
            case 'Hand':
                setAddress(Hand);
                break;
            case 'Side':
                setAddress(Side);
                break;
            default:
                break;
        }
    }

    const handleClick = (e) => {

        setModalimage(getImage(e));
    }
    return (
        <>
            <div className="row">
                <div className="col-1 mt-2">
                    <div className="d-flex flex-column">
                        <img src={Front} onMouseEnter={() => handleEvent('Front')} className='productImageSmall mt-3 ' alt="" srcset="" />
                        <img src={Back} className='productImageSmall mt-3 ' onMouseEnter={() => handleEvent('Back')} alt="" srcset="" />
                        <img src={Chair} className='productImageSmall mt-3 ' onMouseEnter={() => handleEvent('Chair')} alt="" srcset="" />
                        <img src={CloseUp} className='productImageSmall mt-3 ' onMouseEnter={() => handleEvent('CloseUp')} alt="" srcset="" />
                        <img src={Hand} className='productImageSmall mt-3 ' onMouseEnter={() => handleEvent('Hand')} alt="" srcset="" />
                        <img src={Side} className='productImageSmall mt-3 ' onMouseEnter={() => handleEvent('Side')} alt="" srcset="" />
                    </div>
                </div>
                <div className="col-11 mt-2 p-3">
                    <img src={address} alt="" onClick={() => { setShowModal(!showModal) }} />
                </div>
                <div className="">
                    {
                        showModal &&
                        (
                            <div style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    width: '90%',
                                    background: 'white',
                                    padding: '20px',
                                    borderRadius: '5px'
                                }}>
                                    <div className="row">
                                        <div className="col-3">
                                            <p>Van Heusen Men's Regular Fit Polo Shirt</p>
                                            <p>Size : M</p>
                                            <p>Colour : Black</p>
                                            <div className="border p-3">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img src={Front} onClick={() => handleClick('Front')} className='productImageSmall imageSmall mt-3 ' alt="" srcset="" />
                                                    </div>
                                                    <div className="col-4">
                                                        <img src={Back} onClick={() => handleClick('Back')} className='productImageSmall imageSmall mt-3 ' alt="" />
                                                    </div>
                                                    <div className="col-4">
                                                        <img src={Chair} onClick={() => handleClick('Chair')} className='productImageSmall imageSmall mt-3 ' alt="" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img src={CloseUp} onClick={() => handleClick('CloseUp')} className='productImageSmall imageSmall mt-3 ' alt="" srcset="" />
                                                    </div>
                                                    <div className="col-4">
                                                        <img src={Hand} onClick={() => handleClick('Hand')} className='productImageSmall imageSmall mt-3 ' alt="" />
                                                    </div>
                                                    <div className="col-4">
                                                        <img src={Side} onClick={() => handleClick('Side')} className='productImageSmall imageSmall mt-3 ' alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-center justify-content-center">
                                                <img
                                                    src={modalimage}
                                                    className="popOut"
                                                    style={{
                                                        transform: zoom ? 'scale(1.5)' : 'scale(1)',
                                                        transition: 'transform 0.3s'
                                                    }}
                                                    onClick={() => setZoom(!zoom)}
                                                    alt=""
                                                    srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={() => setShowModal(false)}>Close</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
