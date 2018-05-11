import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartProducts, changeQuantity, removeFromCart } from '../../ducks/reducer';
import Checkout from '../Checkout/Checkout';
// import { join } from 'path';

class Cart extends Component {
    constructor() {
        super();

        this.state = {
            
        }

    }
    

    componentDidMount() {
        // // console.log('yup')
        // axios.get(`/api/productCart`).then(res => {
        //     this.setState({cart: res.data})
        // })

        // References the method in the reducer
        this.props.getCartProducts()
    }

    changeQuantity(value, item) {
        console.log(item)
        let cartID = item.cart_id;
        let newQuantity = item.quantity + value;
        this.props.changeQuantity(cartID, newQuantity)
    }

    deleteProduct(id) {
    console.log('Deleting and, deleting and...', id)   
    // axios.delete(`/api/deleteProduct/${id}`).then(res=> {
    //     let newProductList = this.state.cart.splice(id, 1);
    //     this.setState({cart: newProductList})
    // });
    // console.log('Finally DELETED!!!')
    // let id = this.props.match.params.id
    this.props.removeFromCart(id)
    
    this.componentDidMount();
}

    

    render() {
        var cartTotal = 0;
        cartTotal = (this.props.cart.reduce((acc, val)=>acc+(val.quantity * val.price),0)).toFixed(2) || '0.00'
        // console.log('total', cartTotal)

        if (this.props.cart) {
        var cartArray = this.props.cart.map((element, index) => {
            // console.log('cart', cartArray)

            // JS below takes the category off of the database, takes out the spaces and turns the first letter to lower case so the thumbnail on the cart will redirect to the correct page.
            let category = element.category.split(' ').join('')
            category = category[0].toLowerCase() + category.slice(1)
       
            return(
                <div className="cart-main" key={index}>
                    <div className="product-details">
                        <div className="cart-array">
                            <Link to={`/${category}Product/${element.product_id}`}><img className="product-thumbnail" src={element.img} alt="thumbnail" /></Link>
                        </div>
                        <div className="product-title">
                            <p>{element.title}</p>
                            <p>{element.colour}</p>
                        </div>
                    </div>
                    <div className="product-quantity">
                        <button id='fa-minusBtn' onClick={_=>this.changeQuantity(-1, element)}> <i className="fas fa-minus"> </i></button>
                        <h5>{element.quantity}</h5>
                        <button id='fa-plusBtn' onClick={_=>this.changeQuantity(1, element)}> <i className="fas fa-plus"> </i></button>
                    </div>
                    <div className="product-price">
                        <h5>${(element.price * element.quantity).toFixed(2)}</h5>
                    </div>
                    <div className="product-remove">
                        <button id='removeBtn' onClick={_=>this.deleteProduct(element.product_id)}><i className="fas fa-times" ></i></button>
                    </div>
                </div>
            )
        })}
        return(
            <div className="content">
                <div className="upper-text">
                    <h5 className='mycart' >MY CART</h5>  
                    <h5 className='quantity'>QUANTITY</h5>                    
                    <h5 className='price'>PRICE</h5>
                    <h5 className='remove'>REMOVE</h5>
                </div>
                <div className="product-content">
                    {cartArray}
                </div>
                <div className="cart-container">
                    <div className="cart-content">
                        <div className='item-row'>
                            <h5 className="item">Item Total:</h5>
                            <div>
                                ${cartTotal}
                            </div>
                        </div>
                        <div className='express-row'>
                        <h5 className="express">Express Shipping:</h5>
                            <div> 
                               <h5 className='free'> Free-Ninety-Nine </h5>
                            </div>      
                        </div>
                        <div className='total-row'>
                            <h5 className="total">Total: </h5>
                            <div>
                                ${cartTotal}
                            </div>
                        </div>
                    </div>
                    <div className="checkoutBtn-container"> 
                    <Checkout amount={cartTotal * 100}/>
                         
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // 'cartProducts' comes from the state on reducer and puts it on variable called 'cart'
        cart: state.cartProducts
    }
}

export default connect(mapStateToProps, {getCartProducts, changeQuantity, removeFromCart}) (Cart);
