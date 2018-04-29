import React from 'react';
import logo from '../../images/arcteryx-birdword-206x132.jpg';

export default function Footer() {
    return (
        <div className="footer-content">
            <div className="footer-box-1">
                <img className="arc-logo" src={logo} alt="bird-logo"/>
            </div>
            <div className="footer-box-2">
                <h2 className="footer-text">Contact Us</h2>
                <h2 className="footer-text">1-855-201-5307</h2>
                <h2 className="footer-text">Warranty Request</h2>
            </div>
            <div className="footer-box-3">
                <h2 className="footer-text">FAQ</h2>
                <h2 className="footer-text">Sizing Charts</h2>
                <h2 className="footer-text">Product Care</h2>
            </div>
            <div className="footer-box-4">
                <h2 className="footer-text">About LEAF</h2>
                <h2 className="footer-text">Find A Store</h2>
                <h2 className="footer-text">Warranty Policy</h2>
            </div>
            <div className="footer-box-5">
            {/* Sign-In to Auth0 */}
            <a href={process.env.REACT_APP_LOGIN}><h2 className="footer-text">Shop / Sign-In</h2></a>
                <h2 className="footer-text">Privacy Policy</h2>
            </div>
        </div>
    )
}