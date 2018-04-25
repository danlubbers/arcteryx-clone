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
                <div>
                    <h5>DUMMY DATA</h5>
                    <h5>DUMMY DATA</h5>
                    <h5>DUMMY DATA</h5>
                </div>
            </div>
        )
    }
}
