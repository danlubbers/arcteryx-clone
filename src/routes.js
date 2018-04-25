import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Category from './Component/Category/Category';
import Product from './Component/Product/Product';
import Cart from './Component/Cart/Cart';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/category" component={Category} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
    </Switch>
)