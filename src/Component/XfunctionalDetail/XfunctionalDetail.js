import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getOnexFunctionalProduct } from '../../ducks/reducer';
import { addCart } from '../../ducks/reducer';

class XfunctionalDetail extends Component {
  
    componentDidMount() {
            this.props.getOnexFunctionalProduct(this.props.match.params.id)
    }

    addToCart() {
        let id = this.props.match.params.id
        this.props.addCart(id)    
    }
   
    render() {
        if (this.props.xProduct) {
        var productArray = this.props.xProduct.map((element, index)=> {
            return(
                <div key={index}>
                    <div className="main-upper-box">
                        <div className="upper-left-box">
                            <div className="upper-left-text">
                                <Link to="/" id="arcteryx"><p>Arc'teryx ></p></Link>
                                <p id="mens">Mens ></p>
                                <p id="title-link">X-Functional</p>
                            </div>
                                <img className="hero-image" src={element.large_img} alt="Arc-large" />
                        </div>
                        <div className="upper-right-box">
                            <p id="title">{element.title}</p>
                            <p id="description">{element.description}</p>
                            <p id="price">USD ${element.price}</p>
                            <div>
                               <button className="cartBtn" onClick={_=> this.addToCart(this.props.xProduct)}>ADD TO CART</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="lower-box">
                        <p>{element.title}</p>
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
        xProduct: state.onexFunctionalProduct,
        // This is for addToCart button
        productID: state.xProduct
        
    }   
}

export default connect(mapStateToProps, {getOnexFunctionalProduct, addCart}) (XfunctionalDetail);