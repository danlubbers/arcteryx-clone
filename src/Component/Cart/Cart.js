import React, {Component} from 'react';
import axios from 'axios';

export default class Cart extends Component {
    constructor() {
        super();

        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        console.log('yup')
        axios.get(`/api/productCart`).then(res => {
            this.setState({cart: res.data})
        })
    }

    render() {
        let cartArray = this.state.cart.map((element, index) => {
            return(
                <div className="cart-main">
                    <div className="product-details">
                        <div className="cart-array" key={index} >
                            <img className="product-thumbnail" src={element.img} alt="thumbnail" />
                        </div>
                        <div className="product-title">
                            <p>{element.title}</p>
                            <p>{element.colour}</p>
                        </div>
                    </div>
                    <div className="product-quantity">
                        <i className="fas fa-minus"></i>
                        <h5>1</h5>
                        <i className="fas fa-plus"></i>
                    </div>
                    <div className="product-price">
                        <h5>{element.price}</h5>
                    </div>
                    <div className="product-remove">
                        <h5><i className="fas fa-times"></i></h5>
                    </div>
                </div>
            )
        })

        return(
            <div className="content">
                <div className="upper-text">
                    <h5>MY CART</h5>  
                    <h5>QUANTITY</h5>                    
                    <h5>PRICE</h5>
                    <h5>REMOVE</h5>
                </div>
                <div className="product-content">
                <div className="">
                    {cartArray}
                </div>
                    {/* <i className="fas fa-minus"></i>
                    <h5>1</h5>
                    <i className="fas fa-plus"></i>
                    <h5>749.00</h5>
                    <h5><i className="fas fa-times"></i></h5> */}
                </div>
                <div className="cart-container">
                    {/* <h5>CART CONTENT</h5> */}
                    <div className="cart-content">
                        <h5 className="item">Item Total:</h5>
                        <h5 className="express">Express Shipping:</h5>
                        <h5 className="total">Total:</h5>
                    </div>
                    <div className="checkoutBtn-container"> 
                        <button className="checkoutBtn">CONTINUE CHECKOUT</button>
                    </div>
                </div>
            </div>
        )
    }
}
