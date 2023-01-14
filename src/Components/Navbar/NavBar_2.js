import React from 'react'
import './NavBar_2.css'
import { BiMenu } from 'react-icons/bi'

export default function NavBar_2() {
    return (

        <div className="navlinks">
            <div className="navlinks__container">
                <div className="navlinks__left">
                    <span className="navlinks__left__menu navlink__link" >
                        <BiMenu />
                    </span>
                    <span className="navlinks__left__all navlink__link" >
                        All
                    </span>
                </div>
                <div className="navlinks__fill">
                    <span className="navlinks__fill__link navlink__link" >
                        Mobiles
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Electronicsz
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Amazon miniTV
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Gift Cards
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Amazon Business
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Buy Again
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Browsing History
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Baby
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Gift Ideas
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Subscribe & Save
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Nakul's Amazon.in
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Health,Househild & Personal Care
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Toys & Games
                    </span>
                    <span className="navlinks__fill__link navlink__link" >
                        Home Improvenmenrt
                    </span>
                </div>
            </div>
        </div>
    )
}