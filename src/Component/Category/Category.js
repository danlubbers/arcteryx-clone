import React, {Component} from 'react';
import backgroundCategoryImg from '../../images/insulation.jpg';
import axios from 'axios';

export default class Category extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }


    }

    componentDidMount() {
        axios.get(`/api/getAllProducts`).then(res=>{
            this.setState({products: res.data})
            console.log(res.data)
        })
    }

    render() {
        let productsArray = this.state.products.map((element, index)=> {
            return(
                <div key={index} className="single-product">
                    <img className="array-image" src={element.img} alt="arcteryx-product"/>
                    <div className="title-price">
                        <p>{element.title}</p>
                        <p>$ {element.price} USD</p>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <div>
                    <div className="category-text">
                        <h3 className="home-text">Home</h3>
                        <h3 className="cold-weather-text">COLD WEATHER INSULATION</h3>
                    </div>
                    <img className="insulation-img" src={backgroundCategoryImg} alt="snow mountain" />
                </div>
                <div className="products-array">{productsArray}</div>
            </div>

        )
    }
}