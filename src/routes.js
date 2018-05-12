import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import ColdWeather from './Component/ColdWeather/ColdWeather';
import Product from './Component/Product/Product';
import Cart from './Component/Cart/Cart';
import Xfunctional from './Component/Xfunctional/Xfunctional';
import XfunctionalDetail from './Component/XfunctionalDetail/XfunctionalDetail';
import MidLayers from './Component/MidLayers/MidLayers';
import MidLayersDetail from './Component/MidLayerDetail/MidLayerDetail';
import Search from './Component/Search/Search';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/coldWeather" component={ColdWeather} />
        <Route path="/xFunctional" component={Xfunctional} />
        <Route path="/midLayers" component={MidLayers} />
        <Route path="/coldWeatherProduct/:id" component={Product} />
        <Route path="/xFunctionalProduct/:id" component={XfunctionalDetail} />
        <Route path="/midLayerProduct/:id" component={MidLayersDetail} />
        <Route path="/search" component={Search} />
        <Route path="/cart" component={Cart} />
    </Switch>
)