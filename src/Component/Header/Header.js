import React from 'react';
import logo from '../../images/arcteryx-LEAF-birdword-334x132.jpg';
import cart from '../../images/cart.png';
import {Link} from 'react-router-dom';



export default function Header() {
    return (
        <nav className="navbar">
            <ul>
                <div className="header-box-1">
                    <Link to="/"><li><img className="leaf-logo" src={logo} alt="bird-leaf-logo"/></li></Link>
                    <Link to="/category"><li><h2 className="products-text">PRODUCTS</h2></li></Link>
                </div>
                <div className="header-box-2">
                    <li className="find-store">Find A Store</li>
                    <li className="search">Search<i className="fas fa-search" id="fa-search"></i></li>
                    <Link to="/cart"><li><img className="cart-icon" src={cart} alt="cart-logo"/></li></Link>
                </div>
            </ul>
        </nav>
    )
}