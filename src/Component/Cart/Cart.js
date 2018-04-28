import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartProducts } from '../../ducks/reducer';

class Cart extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         cart: []
    //     }
    // }

    componentDidMount() {
        // // console.log('yup')
        // axios.get(`/api/productCart`).then(res => {
        //     this.setState({cart: res.data})
        // })
        this.props.getCartProducts()
    }

    deleteProduct(id) {
    console.log('Deleting and, deleting and...', id)   
    axios.delete(`/api/deleteProduct/${id}`).then(res=> {
        let newProductList = this.state.cart.splice(id, 1);
        this.setState({cart: newProductList})
    });
    console.log('Finally DELETED!!!')
    this.componentDidMount();
}

    render() {
        console.log('before array.map')
        if (this.props.cart) {
        var cartArray = this.props.cart.map((element, index) => {
            console.log('cart', cartArray)
            return(
                <div className="cart-main" key={index}>
                    <div className="product-details">
                        <div className="cart-array">
                            <Link to={`/product/${element.product_id}`}><img className="product-thumbnail" src={element.img} alt="thumbnail" /></Link>
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
                        <h5>$ {element.price}</h5>
                    </div>
                    <div className="product-remove">
                        <button onClick={_=>this.deleteProduct(element.product_id)}><i className="fas fa-times" id='removeBtn'></i></button>
                    </div>
                </div>
            )
        })}
        console.log(cartArray)
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
                </div>
                <div className="cart-container">
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

function mapStateToProps(state) {
    return {
        cart: state.cartProducts
    }
}

export default connect(mapStateToProps, {getCartProducts}) (Cart);
