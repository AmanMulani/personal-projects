import React from "react";
import './Header.css'

export const Header = () => {
    return (
        <div className="header">
            <div className="header-div">
                <img className="logo" alt="Amazon Logo" src="logo.png" />
            </div>
            <div className="header-div">
                Deliver to Safa Mulani
            </div>
            <div className="header-div search-div">
                <div className="search-dropdown">

                </div>
                <input className="search-box" type="text" />
                <div className="search-button">

                </div>
            </div>
            <div className="header-div">
                EN
            </div>
            <div className="header-div">
                Accounts & Lists
            </div>
            <div className="header-div">
                Returns & Orders
            </div>
            <div className="header-div">
                Cart
            </div>
        </div>
    );
}