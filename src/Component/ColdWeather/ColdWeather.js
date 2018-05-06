import React, { Component } from 'react';
import backgroundCategoryImg from '../../images/insulation.jpg';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../../ducks/reducer';

class ColdWeather extends Component {

    componentDidMount() {
        this.props.getProducts()  
    }

    render() {
        // the if statement is because the page loads before redux has a chance to send back the products array.
        if (this.props.products) {
        var productsArray = this.props.products.map((element, index)=> {
            return(
                <Link to={`/product/${element.product_id}`} key={index} className="single-product">
                    <img className="array-image" src={element.img} alt="arcteryx-product"/>
                    <div className="title-price">
                        <p>{element.title}</p>
                        <p>$ {element.price} USD</p>
                    </div>
                </Link>
            )
        })}

        return(
            <div className="main-content">
                <div>
                    <div className="category-text">
                        <Link to="/" className="link-home-text"><h3 className="home-text">Home</h3></Link>
                        <h3 className="cold-weather-text">> COLD WEATHER INSULATION</h3>
                    </div>
                        <div className="cold-weather-box">
                        <h1 className="cold-weather-category">COLD WEATHER INSULATION</h1>
                        <p className="cold-weather-description">Technical construction and specialized materials to enable and sustain personnel in extreme cold conditions.</p>
                    </div>
                    <img className="insulation-img-2" src={backgroundCategoryImg} alt="snow mountain" />
                </div>
                <div className="products-array">{productsArray}</div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps, {getProducts}) (ColdWeather);