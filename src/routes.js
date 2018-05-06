import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import ColdWeather from './Component/ColdWeather/ColdWeather';
import Product from './Component/Product/Product';
import Cart from './Component/Cart/Cart';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/coldWeather" component={ColdWeather} />
        <Route path="/coldWeatherProduct/:id" component={Product} />
        <Route path="/cart" component={Cart} />
    </Switch>
)