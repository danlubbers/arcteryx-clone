import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getProduct } from '../../ducks/reducer';

class Product extends Component {
    
    componentDidMount() {
        // console.log('before axios get in product.js')
            this.props.getProduct(this.props.match.params.id)
    }

    addToCart() {
        let id = this.props.match.params.id

        axios.post(`/api/cart`, {productID: id}).then(res => {
            // this.setState({product: res.data})
        })
    }
   
    render() {
        if (this.props.product) {
        var productArray = this.props.product.map((element, index)=> {
            return(
                <div key={index}>
                    <div className="main-upper-box">
                        <div className="upper-left-box">
                            <div className="upper-left-text">
                                <Link to="/" id="arcteryx"><p>Arc'teryx</p></Link>
                                <p id="mens">Mens</p>
                                <p id="title-link">Cold Wx Parka SVX</p>
                            </div>
                                <img className="hero-image" src={element.large_img} alt="Arc-large" />
                        </div>
                        <div className="upper-right-box">
                            <p id="title">{element.title}</p>
                            <p id="description">{element.description}</p>
                            {/* <h4>USD</h4><p>$ </p> */}
                            <p id="price">{element.price}</p>
                            <div>
                               <button className="cartBtn" onClick={_=> this.addToCart(this.state.product)}>ADD TO CART</button>
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
        product: state.product
    }
}

export default connect(mapStateToProps, {getProduct}) (Product);