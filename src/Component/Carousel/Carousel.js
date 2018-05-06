import React, {Component} from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import assault from '../../images/assault.jpg';
import insulation from '../../images/insulation.jpg';
import midlayers from '../../images/midlayers.jpg';
import xFunctional from '../../images/x-functional.jpg';
import {Link} from 'react-router-dom'

export default class Carousel extends Component {

    // componentDidMount() {
    //         this.slider.slickPlay();
    //     }

    render() {
    const settings = {
        dots: true, 
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToSlide: 4,
        // autoplay: true, 
        autoPlaySpeed: 1000,
        // cssEase: "linear",
        // adaptiveHeight: true,
        initialSlide: 0
    };
    return (
        <div className="carousel">
            <Slider ref={slider => (this.slider = slider)}{...settings}>
            <div>
                <div className="text-box">
                    <h1 className="text-category">Extreme Cold Weather Kit</h1>
                    <h1 className="text-title">New Cold WX Parka & BIB Pant SVX </h1>
                    <p className="text-description">For the operational needs of personnel in extreme cold weather conditions.</p>
                <div className="button-container">
                    <Link to={`/product/1`}><button className="text-button">View Parka SVX</button></Link>
                    <Link to={`/product/8`}><button className="text-button">View Bib Pant SVX</button></Link>
                </div>
                </div>
                    <img className="insulation-img" src={insulation} alt="insulation"/>
                </div>
                <div>
                    <img className="assault-img" src={assault} alt="assault"/>
                </div>
                <div>
                    <img className="midlayers-img" src={midlayers} alt="midlayers"/>
                </div>
                <div>
                    <img className="x-functional-img" src={xFunctional} alt="x-functional"/>
                </div>


            </Slider>
        </div>
    )
    }
}