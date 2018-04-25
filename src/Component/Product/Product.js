import React, {Component} from 'react';
import axios from 'axios';

export default class Product extends Component {
    constructor() {
        super();

        this.state = {
            product: []
        }
    }

    componentDidMount() {
        console.log('before axios get in product.js')
        let id = this.props.match.params.id;

        axios.get(`/api/getOneProduct/${id}`).then(res => {
            this.setState({product: res.data})
            console.log('arcteryx')
        })
    }
   
    render() {
        let productArray = this.state.product.map((element, index)=> {
            return(
                <div key={index}>
                    <img className="large-image" src={element.img} alt="Arc-large" />
                    <p>{element.title}</p>
                </div>
            )
        })
        console.log(productArray)
        return(
            <div>
                <p>BLAH BLAH BLAH</p>
                <div>{productArray}</div>
            </div>
        )
    }
}