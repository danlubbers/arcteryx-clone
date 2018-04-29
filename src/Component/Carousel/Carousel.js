import React, {Component} from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import assault from '../../images/assault.jpg';
import insulation from '../../images/insulation.jpg';
import midlayers from '../../images/midlayers.jpg';
import xFunctional from '../../images/x-functional.jpg';

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
        autoPlay: true,
        autoPlaySpeed: 1000,
        // cssEase: "linear",
        // adaptiveHeight: true,
        initialSlide: 0
    };
    return (
        <div>
            <Slider ref={slider => (this.slider = slider)}{...settings}>
            <div>
                <img className="assault-img" src={assault} alt="assault"/>
            </div>
            <div>
                <img className="insulation-img" src={insulation} alt="insulation"/>
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