import React, {Component} from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import Lock from 'react-icons/lib/fa/lock';
import {getCartProducts} from '../../ducks/reducer';
import {connect} from 'react-redux';

class Checkout extends Component {

    onToken = (token) => {
        token.card = void 0; // Does not store card information
        console.log(this.props.amount)
        axios.post(`/api/payment`, {token, amount: this.props.amount}).then(res => {
            console.log('Yeah, buddy! Gimme yo money')
        }).catch(err => console.log(err))
    }

    onClose = () => {
        this.props.getCartProducts();
    }

    render() {
        // console.log(process.env.REACT_APP_STRIPE_KEY)
        return(
            <div>
                <StripeCheckout 
                token = {this.onToken}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                amount = {this.props.amount}
                closed = {this.onClose}>
                <button className="checkoutBtn">CONTINUE CHECKOUT <Lock/></button>
                </StripeCheckout>
            </div>
        )
    }
}
// null is because we are not pulling any data from the store, we just need to update the data
export default connect(null, {getCartProducts})(Checkout);