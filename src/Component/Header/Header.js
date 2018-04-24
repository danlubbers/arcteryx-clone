import React from 'react';
import logo from '../../images/arcteryx-LEAF-birdword-334x132.jpg';
import cart from '../../images/cart.png';
import {Link} from 'react-router-dom';



export default function Header() {
    return (
        <div className="header-content">
            <div className="header-box-1"> 
                <Link to="/"><img className="leaf-logo" src={logo} alt="bird-leaf-logo"/></Link>
                <span className="dropdown">
                   <Link to="/category"><h2 className="products-text">PRODUCTS</h2></Link>
                </span>
                    <div className="dropdown-content">
                    <h2>TEST</h2>
                    </div>
            </div>
            <div className="header-box-2">
                <h2 className="find-store">Find A Store</h2>
                <h2 className="search">Search</h2>
                <img className="cart-icon" src={cart} alt="cart-logo"/>
            </div>
        </div>
        
        // <header className="header-content">
        //     <div className="header-box-1"> 
        //         <img className="leaf-logo" src={logo} alt="bird-leaf-logo"/>
        //         <h2 className="products-text">PRODUCTS</h2>
        //     </div>
        //     <nav className="header-box-2">
        //         <ul>
        //             <li className="find-store">Find A Store</li>
        //             <li className="search">Search</li>
        //             <li><img className="cart-icon" src={cart} alt="cart-logo"/></li>
        //         </ul>
        //     </nav>
        // </header>
    )
}