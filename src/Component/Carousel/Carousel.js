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
        autoPlaySpeed: 500,
        cssEase: "linear",
        adaptiveHeight: true,
        initialSlide: 0
    };
    return (
        <div className="carousel">
            <Slider ref={slider => (this.slider = slider)}{...settings}>
            <div>
                <div className="text-box-1">
                    <h1 className="text-category-1">Extreme Cold Weather Kit</h1>
                    <h1 className="text-title-1">New Cold WX Parka & BIB Pant SVX </h1>
                    <p className="text-description-1">For the operational needs of personnel in extreme cold weather conditions.</p>
                <div className="button-container-1">
                    <Link to={`/coldWeatherProduct/1`}><button className="text-button-1">View Parka SVX</button></Link>
                    <Link to={`/coldWeatherProduct/8`}><button className="text-button-1">View Bib Pant SVX</button></Link>
                </div>
                </div>
                    <img className="insulation-img" src={insulation} alt="insulation"/>
                </div>
                <div>
                <div className="text-box-2">
                    <h1 className="text-category-2">Enhanced Mobility</h1>
                    <h1 className="text-title-2">Assault Uniform LT </h1>
                    <p className="text-description-2">Full range of motion combat uniform for hot weather conditions.</p>
                <div className="button-container-2">
                    <Link to={`/product/`}><button className="text-button-2">ASSAULT SHIRT LT</button></Link>
                    <Link to={`/product/`}><button className="text-button-2">ASSAULT PANT LT</button></Link>
                </div>
                </div>
                    <img className="assault-img" src={assault} alt="assault"/>
                </div>
                <div>
                <div className="text-box-3">
                    <h1 className="text-category-3">Everyday Function</h1>
                    <h1 className="text-title-3">New Naga Pullover AR </h1>
                    <p className="text-description-3">Air permeable midlayer with warmth with weather resistance for wet, cold environments.</p>
                <div className="button-container-3">
                    <Link to={`/product/`}><button className="text-button-3">VIEW NAGA PULLOVER AR</button></Link>
                </div>
                </div>
                    <img className="midlayers-img" src={midlayers} alt="midlayers"/>
                </div>
                <div>
                <div className="text-box-4">
                    <h1 className="text-category-4">xFunctional Carry</h1>
                    <h1 className="text-title-4">New Courier Bag 15 </h1>
                    <p className="text-description-4">Messenger style bag capable of concealed carry and administrative duties.</p>
                <div className="button-container-4">
                    <Link to={`/XFunctionalProduct/12`}><button className="text-button-4">VIEW COURIER BAG 15</button></Link>
                </div>
                </div>
                    <img className="x-functional-img" src={xFunctional} alt="x-functional"/>
                </div>


            </Slider>
        </div>
    )
    }
}