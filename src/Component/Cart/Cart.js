import React, {Component} from 'react';

export default class Cart extends Component {
    constructor() {
        super();

        this.state = {
            cart: []
        }
    }

    render() {
        return(
            <div className="content">
                <div className="upper-text">
                    <h5>MY CART</h5>
                    <h5>QUANTITY</h5>
                    <h5>PRICE</h5>
                    <h5>REMOVE</h5>
                </div>
                <div className="product-content">
                    <h5>Alpha SV</h5>
                    <h5>1</h5>
                    <h5>749.00</h5>
                    <h5>Remove button</h5>
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
