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
                <div key={index}>
                    <img src={element.img} alt="thumbnail" />
                    <p>{element.title}</p>
                    <p>{element.description}</p>
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
                    {cartArray}
                    <h5>Alpha SV</h5>
                    <i className="fas fa-minus"></i>
                    <h5>1</h5>
                    <i className="fas fa-plus"></i>
                    <h5>749.00</h5>
                    <h5><i className="fas fa-times"></i></h5>
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
