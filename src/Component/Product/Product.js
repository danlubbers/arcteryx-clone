import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Product extends Component {
    constructor() {
        super();

        this.state = {
            product: []
        }
    }

    componentDidMount() {
        // console.log('before axios get in product.js')
        let id = this.props.match.params.id;

        axios.get(`/api/getOneProduct/${id}`).then(res => {
            this.setState({product: res.data})
            // console.log('arcteryx')
        })
    }
   
    render() {
        let productArray = this.state.product.map((element, index)=> {
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
                        </div>
                    </div>
                    <div className="lower-box">
                        <p>{element.title}</p>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <div>{productArray}</div>
            </div>
        )
    }
}