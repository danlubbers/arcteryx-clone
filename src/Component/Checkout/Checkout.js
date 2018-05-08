import React, {Component} from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

class Checkout extends Component {

    onToken = (token) => {
        token.card = void 0; // Does not store card information
        console.log(this.props.amount)
        axios.post(`/api/payment`, {token, amount: this.props.amount}).then(res => {
            console.log('Yeah, buddy! Gimme yo money')
        }).catch(err => console.log(err))
    }
    render() {
        return(
            <div>
                <StripeCheckout 
                token = {this.onToken}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                amount = {this.props.amount}>
                <button className="checkoutBtn">CONTINUE CHECKOUT</button>
                </StripeCheckout>
            </div>
        )
    }
}

export default Checkout;