import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getOneMidLayerProduct } from '../../ducks/reducer';
import { addCart } from '../../ducks/reducer';

class MidLayerDetail extends Component {
  
    componentDidMount() {
            this.props.getOneMidLayerProduct(this.props.match.params.id)
    }
    

    addToCart() {
        let id = this.props.match.params.id
        this.props.addCart(id)    
    }
   
    render() {
        if (this.props.midLayerProduct) {
        var productArray = this.props.midLayerProduct.map((element, index)=> {
            return(
                <div key={index}>
                    <div className="main-upper-box">
                        <div className="upper-left-box">
                            <div className="upper-left-text">
                                <Link to="/" id="arcteryx"><p>Arc'teryx ></p></Link>
                                <p id="mens">Mens ></p>
                                <p id="title-link">MID LAYER</p>
                            </div>
                                <img className="hero-image" src={element.large_img} alt="Arc-large" />
                        </div>
                        <div className="upper-right-box">
                            <p id="title">{element.title}</p>
                            <p id="description">{element.description}</p>
                            <p id="price">USD ${element.price}</p>
                            <div>
                            <Link to="/cart"><button className="cartBtn" onClick={_=> this.addToCart(this.props.midLayerProduct)}>ADD TO CART</button></Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className="lower-box">
                        {/* <p>{element.title}</p> */}
                    </div>
                </div>
            )
        })}
        return(
            <div>
                <div>{productArray}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    
    return{
        // This is to display product on page (componentDidMount)
        midLayerProduct: state.oneMidLayer,
        // This is for addToCart button
        productID: state.xProduct
        
    }   
}

export default connect(mapStateToProps, {getOneMidLayerProduct, addCart}) (MidLayerDetail);