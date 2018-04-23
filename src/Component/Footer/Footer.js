import React from 'react';
import logo from '../../images/arcteryx-birdword-206x132.jpg';

export default function Footer() {
    return (
        <div>
            <h1 className="footer-text">Footer</h1>
            <img className="arc-logo" src={logo} alt="bird-logo"/>
        </div>
    )
}