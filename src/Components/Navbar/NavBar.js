import React from 'react'
import './NavBar.css'
import {BiSearchAlt2} from 'react-icons/bi'
import {BsCart3} from 'react-icons/bs'

export default function NavBar() {
    return (
        <nav className="header">
            <div >
                <img
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="logo"
                    className="header__logo"
                />
            </div>
            <div className="header__search">
                <input type="text" name="" id="" className="header__searchbar" />
                {/* <SearchIcon className="header__searchIcon" onClick={notify} /> */}
                <BiSearchAlt2 className="header__searchIcon"></BiSearchAlt2>
            </div>
            <div className="header__nav">
                <div className="header__link">
                    <div className="header__option" onClick={() => alert("hehe")}>
                        <span className="header__option__lineOne">Hello,</span>
                        <span className="header__option__lineTwo">
                            Sign Out
                        </span>
                    </div>
                </div>
                <div to="" className="header__link">
                    <div className="header__option" onClick={() => alert("hehe")}>
                        <span className="header__option__lineOne">Returns</span>
                        <span className="header__option__lineTwo">& Orders</span>
                    </div>
                </div>
                <div to="" className="header__link">
                    <div className="header__option" onClick={() => alert("hehe")}>
                        <span className="header__option__lineOne">Your</span>
                        <span className="header__option__lineTwo">Prime</span>
                    </div>
                </div>
                <div to="/checkout" className="header__link">
                    <div className="header__option__basket">
                        <BsCart3 style={{ fontSize: 30 }} />
                        <span className="header__option__lineTwo header__basket__count">
                            {5}
                        </span>
                    </div>
                </div>
            </div>
        </nav>

    )
}
