import React from 'react';
import logo from '../../images/arcteryx-LEAF-birdword-334x132.jpg';
import cart from '../../images/cart.png';

export default function Header() {
    return (
        <div className="header-content">
            <div className="header-box-1"> 
                <img className="leaf-logo" src={logo} alt="bird-leaf-logo"/>
                <h2 className="products-text">PRODUCTS</h2>
            </div>
            <div className="header-box-2">
                <h2>Find a Store</h2>
                <h2>Search</h2>
                <img className="cart-icon" src={cart} alt="cart-logo"/>
            </div>
        </div>
    )
}