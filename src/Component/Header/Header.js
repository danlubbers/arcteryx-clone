import React, {Component} from 'react';
import logo from '../../images/arcteryx-LEAF-birdword-334x132.jpg';
import cart from '../../images/cart.png';
import {Link} from 'react-router-dom';

import combatUniforms from '../../images/nav-images/combat-uniforms.gif';
import baseLayer from '../../images/nav-images/base-layer.gif';
import midLayer from '../../images/nav-images/mid-layer.gif';
import softShell from '../../images/nav-images/softshell.gif';
import wetWeather from '../../images/nav-images/hardshell.gif';
import coldWeather from '../../images/nav-images/cold-weather-insulation.gif';
import accessories from '../../images/nav-images/accessories.gif';
import crossFunctional from '../../images/nav-images/ls16-cross-functional-equipment.gif';
import loadCarry from '../../images/nav-images/ls16-packs.gif';
import harnesses from '../../images/nav-images/ls16-belts-and-harnesses.gif';
import stationID from '../../images/nav-images/station-identification.gif';



class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        }
        this.handleOver = this.handleOver.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    handleOver() {
        this.setState({showMenu: !this.state.showMenu})
    }

    handleLeave() {
        this.setState({showMenu: !this.state.showMenu})
    }

    render() {
        let {showMenu} = this.state;
        let slideCSS = showMenu ? 'slide-menu slide-menu-position' : 'slide-menu';

        return (
            <section className="main">
                <nav className="navbar">
                    <ul>
                        <div className="header-box-1">
                            <li><Link to="/"><img className="leaf-logo" src={logo} alt="bird-leaf-logo"/></Link></li>
                            <li><button className="productsTextBtn" onMouseOver={this.handleOver} >{showMenu ? 'PRODUCTS ' : 'PRODUCTS '}<i className="fa fa-angle-down" id="fa-angle-down"></i></button></li>
                        </div>
            
                        <div className={slideCSS} onMouseLeave={this.handleLeave}>
                        <div className='container-left'>CONTAINER FOR LOGIN</div>
                            <div className="dropdown-categories">
                                <div className='box1'>
                                    <img className="combat-uniforms" src={combatUniforms} alt="combat uniforms" />
                                    <p className='nav-text'>Combat Uniforms</p>
                                </div>
                                <div className='box2'>
                                    <img className="baselayers" src={baseLayer} alt="baselayers" />
                                    <p className='nav-text'>Base Layer</p>
                                </div>
                                <div className='box3'>
                                     <img className="midlayers" src={midLayer} alt="midlayers" />
                                     <p className='nav-text'>Mid Layer</p>
                                </div>
                                <div className='box4'>
                                    <img className="softshells" src={softShell} alt="softshells" />
                                    <p className='nav-text'>Softshell</p>
                                </div>
                                <div className='box5'>
                                    <img className="wetWeather" src={wetWeather} alt="wet weather" />
                                    <p className='nav-text'>Wet Weather Protection</p>
                                </div>
                                <Link to='/coldWeather'><div className='box6'>
                                    <img className="coldWeather" src={coldWeather} alt="cold weather" />
                                    <p className='nav-text'>Cold Weather Insulation</p>
                                </div></Link>
                                <div className='box7'>
                                    <img className="accessories" src={accessories} alt="accessories" />
                                    <p className='nav-text'>Apparel Accessories</p>
                                </div>
                                <div className='box8'>
                                    <img className="crossFunctional" src={crossFunctional} alt="cross functional" />
                                    <p className='nav-text'>Cross Functional Equipment</p>
                                </div>
                                <div className='box9'>
                                    <img className="loadCarry" src={loadCarry} alt="load carry" />
                                    <p className='nav-text'>Load Carriage Equipment</p>
                                </div>
                                <div className='box10'>
                                    <img className="harnesses" src={harnesses} alt="harnesses" />
                                    <p className='nav-text'>Belts and Harnesses</p>
                                </div>
                                <div className='box11'>
                                    <img className="astationID" src={stationID} alt="stationID" />
                                    <p className='nav-text'>Station identification</p>
                                </div>
                            </div>
                        </div>

                        <div className="header-box-2">
                            <li className="find-store">Find A Store</li>
                            <li className="search">Search<i className="fas fa-search" id="fa-search"></i></li>
                            <li><Link to="/cart"><img className="cart-icon" src={cart} alt="cart-logo"/></Link></li>
                        </div>
                    
                    </ul>
                </nav>
            </section>
        )
    }
}
export default Header;