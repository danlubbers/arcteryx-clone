import React, {Component} from 'react';
import backgroundCategoryImg from '../../images/insulation.jpg';

export default class Category extends Component {


    render() {
        return(
            <div>
                <div>
                    <div className="category-text">
                        <h3 className="home-text">Home</h3>
                        <h3 className="cold-weather-text">COLD WEATHER INSULATION</h3>
                    </div>
                    <img className="insulation-img" src={backgroundCategoryImg} alt="snow mountain" />
                </div>
            </div>

        )
    }
}