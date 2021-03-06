import axios from "axios";

// Set initialState
const initialState = {
    user: null,
    allColdProducts: [],
    oneColdProduct: [],
    allxFunctionalProducts: [],
    onexFunctionalProduct: [],
    allMidLayers: [],
    oneMidlayer: [],
    addToCart: [],
    cartProducts: [],
    cartQuantity: [],
    removeProduct: []
}

// Create our Action types with const and variable is ALL CAPS!
const GET_USER_INFO = 'GET_USER_INFO';
const ALL_COLD_PRODUCTS = 'ALL_COLD_PRODUCTS';
const ONE_COLD_PRODUCT = 'ONE_COLD_PRODUCT';
const ALL_X_FUNCTIONAL_PRODUCTS = 'ALL_X_FUNCTIONAL_PRODUCTS';
const ONE_X_FUNCTIONAL_PRODUCT = 'ONE_X_FUNCTIONAL_PRODUCT';
const ALL_MID_LAYERS = 'ALL_MID_LAYERS';
const ONE_MID_LAYER = 'ONE_MID_LAYER';
const ADD_TO_CART = 'ADD_TO_CART';
const CART_PRODUCTS = 'CART_PRODUCTS';
const CART_QUANTITY = 'CART_QUANTITY';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';


// Action Creator Functions return a 'type' and 'payload'

// Action Creator for AUTH0
export function getUser() {
    let userData = axios.get('/auth/me').then(res => {
        return res.data;
    }); 
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

// Action Creator to getAllProducts for Category Page
export function getAllColdProducts() {
    let products = axios.get(`/api/getAllColdWeatherProducts`).then(res => {
        // console.log('test', res.data)
        return res.data
    }); 
        return { 
            type: ALL_COLD_PRODUCTS,
            payload: products
    }
    
}

// Action Creator to getOneProducts for Product Page
export function getOneColdProduct(id) {
    // console.log(id)
    let product = axios.get(`/api/getOneColdWeatherProduct/${id}`).then(res => {
        // console.log('test2', res.data)
        return res.data
    });
        return {
            type: ONE_COLD_PRODUCT,
            payload: product
        }
}

export function getAllxFunctionalProducts() {
    let products = axios.get(`/api/getAllxFunctionalProducts`).then(res => {
        // console.log('test', res.data)
        return res.data
    }); 
        return { 
            type: ALL_X_FUNCTIONAL_PRODUCTS,
            payload: products
    }
    
}

// Action Creator to getOneProducts for Product Page
export function getOnexFunctionalProduct(id) {
    // console.log(id)
    let xProduct = axios.get(`/api/getOnexFunctionalProduct/${id}`).then(res => {
        // console.log('test2', res.data)
        return res.data
    });
        return {
            type: ONE_X_FUNCTIONAL_PRODUCT,
            payload: xProduct
        }
}

export function getAllMidLayerProducts() {
    let products = axios.get(`/api/midLayers`).then(res => {
        return res.data 
    });
    return {
        type: ALL_MID_LAYERS,
        payload: products
    }
}

export function getOneMidLayerProduct(id) {
    // console.log(id)
    let midLayerProduct = axios.get(`/api/getOneMidLayerProduct/${id}`).then(res => {
        // console.log('test2', res.data)
        return res.data
    });
        return {
            type: ONE_MID_LAYER,
            payload: midLayerProduct
        }
}

export function addCart(id) {
    // console.log(id)
    let addToCart = axios.post(`/api/cart`, {productID: id}).then(res => {
        // console.log('test', res.data)
        return res.data
    });
        return {
            type: ADD_TO_CART,
            payload: addToCart
        }
}

export function getCartProducts() {
    let cartProducts = axios.get(`/api/productCart`).then(res => {
    //    console.log(res.data)
        return res.data
    });
        return {
            type: CART_PRODUCTS,
            payload: cartProducts
        }
}

export function changeQuantity(cartID, newQuantity) {
    let cartQuantity = axios.put(`/api/cart`, {cartID, newQuantity}).then(res=>{
        // console.log(res)
        return res.data
    });
        return {
            type: CART_QUANTITY,
            payload: cartQuantity
        }
}

export function removeFromCart(id) {
    let removeProduct = axios.delete(`/api/deleteProduct/${id}`).then(res => {
            return res.data
    });
        return {
            type: REMOVE_PRODUCT,
            payload: removeProduct
        }
}

// Add the function reducer with the parameters 'state' set to equal initialState and 'action'
export default function reducer(state=initialState, action) {
    // console.log(action)
    switch(action.type) {
        // Add our action types to our reducer
        case GET_USER_INFO + '_FULFILLED':
        // Use Object.assign to get the previous value of state and update it's property on the payload.
            return Object.assign({}, state, {user: action.payload})
        // '_FULFILLED, fulfills the promise, otherwise redux will not return the Array
        case ALL_COLD_PRODUCTS + '_FULFILLED':
        // console.log('test2')
            return Object.assign( {}, state, {allColdProducts: action.payload});
        case ONE_COLD_PRODUCT + '_FULFILLED':
            return Object.assign( {}, state, {oneColdProduct: action.payload});
        case ALL_X_FUNCTIONAL_PRODUCTS + '_FULFILLED':
            // console.log('test2')
            return Object.assign( {}, state, {allxFunctionalProducts: action.payload});
        case ONE_X_FUNCTIONAL_PRODUCT + '_FULFILLED':
            return Object.assign( {}, state, {onexFunctionalProduct: action.payload});
        case ALL_MID_LAYERS + '_FULFILLED':
            // console.log('midlayers')
            return Object.assign( {}, state, {allMidLayers: action.payload});
        case ONE_MID_LAYER + '_FULFILLED':
            // console.log('midlayer-single-product')
            return Object.assign( {}, state, {oneMidLayer: action.payload});
        case ADD_TO_CART + '_FULFILLED':
            return Object.assign( {}, state, {addToCart: action.payload});
        case CART_PRODUCTS + '_FULFILLED':
            return Object.assign( {}, state, {cartProducts: action.payload});
        case CART_QUANTITY + '_FULFILLED':
        // cartProducts overwrites the array with the new cart
            return Object.assign( {}, state, {cartProducts: action.payload});
        case REMOVE_PRODUCT + '_FULFILLED':
            return Object.assign( {}, state, {removeProduct: action.payload});
        default:
            return state;
    }

}