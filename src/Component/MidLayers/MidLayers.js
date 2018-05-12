import React, {Component} from 'react';
import MidLayerImage from '../../images/mid-layer-category.jpg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAllMidLayerProducts} from '../../ducks/reducer';

class MidLayers extends Component {

    componentDidMount() {
        this.props.getAllMidLayerProducts()
    }

    render() {
        if(this.props.midLayers){
            var productsArray = this.props.midLayers.map((element, index)=>{
                return(
                    <Link to={`/midLayerProduct/${element.product_id}`} key={index} className="single-product">
                    <img className="array-image" src={element.img} alt="arcteryx-product"/>
                    <div className="title-price">
                        <p>{element.title}</p>
                        <p className='price'>${element.price} USD</p>
                    </div>
                </Link>
                )
            })}

            return(
                <div className="main-content">
                    <div className='booger'>
                        <div className="category-text">
                            <Link to="/" className="link-home-text"><h3 className="home-text">Home</h3></Link>
                            <h3 className="cold-weather-text">> MID LAYER</h3>
                        </div>
                            <div className="cold-weather-box">
                            <h1 className="cold-weather-category">MID LAYER</h1>
                            <p className="cold-weather-description">Everyday layers that provide warmth and weather resistance, to be worn under protective equipment or as outerwear.</p>
                        </div>
                        <img className="insulation-img-2" src={MidLayerImage} alt="snow mountain" />
                    </div>
                    <div className="products-array">{productsArray}</div>
                </div>
    
            )
    }
}

function mapStateToProps(state) {
    return{
        midLayers: state.allMidLayers
    }
}

export default connect(mapStateToProps, {getAllMidLayerProducts}) (MidLayers);