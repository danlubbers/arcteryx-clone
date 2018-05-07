import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import ColdWeather from './Component/ColdWeather/ColdWeather';
import Product from './Component/Product/Product';
import Cart from './Component/Cart/Cart';
import Xfunctional from './Component/Xfunctional/Xfunctional';
import XfunctionalDetail from './Component/XfunctionalDetail/XfunctionalDetail';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/coldWeather" component={ColdWeather} />
        <Route path="/xFunctional" component={Xfunctional} />
        <Route path="/coldWeatherProduct/:id" component={Product} />
        <Route path="/xFunctionalProduct/:id" component={XfunctionalDetail} />
        <Route path="/cart" component={Cart} />
    </Switch>
)