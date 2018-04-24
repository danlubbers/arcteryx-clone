import React, {Component} from 'react';
// import axios from 'axios';

export default class Product extends Component {
    constructor() {
        super();

        this.state = {
            product: []
        }
    }
    // componentidd mount
// this.props.match.params.id

    render() {
        return(
            <div>
                <h2>Product</h2>
            </div>
        )
    }
}