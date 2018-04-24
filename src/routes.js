import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import Category from './Component/Category/Category';
import Product from './Component/Product/Product';
import Cart from './Component/Cart/Cart';

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/category" component={Category} />
        <Route path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
    </Switch>
)