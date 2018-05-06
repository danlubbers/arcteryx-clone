import React from 'react';
import logo from '../../images/arcteryx-LEAF-birdword-334x132.jpg';
import cart from '../../images/cart.png';
import {Link} from 'react-router-dom';



export default function Header() {
    return (
        <nav className="navbar">
            <ul>
                <div className="header-box-1">
                    <li><Link to="/"><img className="leaf-logo" src={logo} alt="bird-leaf-logo"/></Link></li>
                    <li><Link to="/category"><h2 className="products-text">PRODUCTS <i className="fa fa-angle-down" id="fa-angle-down"></i></h2></Link></li>
                </div>
                <div className="header-box-2">
                    <li className="find-store">Find A Store</li>
                    <li className="search">Search<i className="fas fa-search" id="fa-search"></i></li>
                    <li><Link to="/cart"><img className="cart-icon" src={cart} alt="cart-logo"/></Link></li>
                </div>
            </ul>
        </nav>
    )
}