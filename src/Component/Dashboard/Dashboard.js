import React from 'react';
import backgroundImg from '../../images/midlayers.jpg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Dashboard() {
    return(
        <div>
            <div className="header">
                <Header />
            </div>

            <div>
                <img className="midlayers-img"src={backgroundImg} alt="background images"/> 
            </div>

            <div className="footer">
                 <Footer />
            </div>
        </div>
    )
}