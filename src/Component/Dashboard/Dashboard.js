import React from 'react';
import backgroundDashboardImg from '../../images/midlayers.jpg';


export default function Dashboard() {
    return(
        <div>
           
            <div className="slick-carousel">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <img className="midlayers-img"src={backgroundDashboardImg} alt="background images"/> 
            </div>

           
        </div>
    )
}