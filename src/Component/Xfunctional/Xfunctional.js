import React, { Component } from 'react';
import XfunctionalImage from '../../images/x-functional.jpg';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllxFunctionalProducts } from '../../ducks/reducer';

class Xfunctional extends Component {

    componentDidMount() {
        this.props.getAllxFunctionalProducts()  
    }

    render() {
        // the if statement is because the page loads before redux has a chance to send back the products array.
        if (this.props.xFunctionalProducts) {
        var productsArray = this.props.xFunctionalProducts.map((element, index)=> {
            return(
                <Link to={`/coldWeatherProduct/${element.product_id}`} key={index} className="single-product">
                    <img className="array-image" src={element.img} alt="arcteryx-product"/>
                    <div className="title-price">
                        <p>{element.title}</p>
                        <p className='price'>${element.price} USD</p>
                    </div>
                </Link>
            )
        })}

        return(
            <div className="main-content">
                <div>
                    <div className="category-text">
                        <Link to="/" className="link-home-text"><h3 className="home-text">Home</h3></Link>
                        <h3 className="cold-weather-text">> CROSS FUNCTIONAL EQUIPMENT</h3>
                    </div>
                        <div className="cold-weather-box">
                        <h1 className="cold-weather-category">CROSS FUNCTIONAL EQUIPMENT</h1>
                        <p className="cold-weather-description">Apparel and equipment utilized by the end-user when on duty or off duty.</p>
                    </div>
                    <img className="insulation-img-2" src={XfunctionalImage} alt="snow mountain" />
                </div>
                <div className="products-array">{productsArray}</div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return{
        xFunctionalProducts: state.allxFunctionalProducts
    }
}

export default connect(mapStateToProps, {getAllxFunctionalProducts}) (Xfunctional);