import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getOneColdProduct } from '../../ducks/reducer';
import { addCart } from '../../ducks/reducer';

class Product extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         cart: []
    //     }
    // }
    
    componentDidMount() {
        // needs to pass in (this.props.match.params.id) to match 
            this.props.getOneColdProduct(this.props.match.params.id)
    }

    addToCart() {
        // or i can put (this.props...) to a variable and pass in the variable
        let id = this.props.match.params.id

        this.props.addCart(id)
        // axios.post(`/api/cart`, {productID: id}).then(res => {
        //     // this.setState({product: res.data})
        // })
    }
   
    render() {
        if (this.props.coldProduct) {
        var productArray = this.props.coldProduct.map((element, index)=> {
            return(
                <div key={index}>
                    <div className="main-upper-box">
                        <div className="upper-left-box">
                            <div className="upper-left-text">
                                <Link to="/" id="arcteryx"><p>Arc'teryx ></p></Link>
                                <p id="mens">Mens ></p>
                                <p id="title-link">Cold Weather Insulation</p>
                            </div>
                                <img className="hero-image" src={element.large_img} alt="Arc-large" />
                        </div>
                        <div className="upper-right-box">
                            <p id="title">{element.title}</p>
                            <p id="description">{element.description}</p>
                            <p id="price">USD ${element.price}</p>
                            <div>
                               <button className="cartBtn" onClick={_=> this.addToCart(this.props.product)}>ADD TO CART</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="lower-box">
                        {/* <p>{element.title}</p> */}
                    </div>
                </div>
            )
        })}
        return(
            <div>
                <div>{productArray}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        // This is to display product on page (componentDidMount)
        coldProduct: state.oneColdProduct,
        // This is for addToCart button
        productID: state.product
    }
}

export default connect(mapStateToProps, {getOneColdProduct, addCart}) (Product);