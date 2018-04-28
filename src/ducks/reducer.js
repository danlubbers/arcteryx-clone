import axios from "axios";

// Set initialState
const initialState = {
    user: {},
    products: [],
    product: [],
    addToCart: [],
    cartProducts: []
}

// Create our Action types with const and variable is ALL CAPS!
const GET_USER_INFO = 'GET_USER_INFO';
const PRODUCTS = 'PRODUCTS';
const PRODUCT = 'PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';
const CART_PRODUCTS = 'CART_PRODUCTS';


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
export function getProducts() {
    let products = axios.get(`/api/getAllProducts`).then(res => {
        // console.log('test', res.data)
        return res.data
    }); 
        return { 
            type: PRODUCTS,
            payload: products
    }
    
}

// Action Creator to getOneProducts for Product Page
export function getProduct(id) {
    // console.log(id)
    let product = axios.get(`/api/getOneProduct/${id}`).then(res => {
        // console.log('test', res.data)
        return res.data
    });
        return {
            type: PRODUCT,
            payload: product
        }
}

export function addCart(id) {
    console.log(id)
    let addToCart = axios.post(`/api/cart`, {productID: id}).then(res => {
        console.log('test', res.data)
        return res.data
    });
        return {
            type: ADD_TO_CART,
            payload: addToCart
        }
}

export function getCartProducts() {
    console.log('backend')
    let cartProducts = axios.get(`/api/productCart`).then(res => {
       console.log(res.data)
        return res.data
    });
        return {
            type: CART_PRODUCTS,
            payload: cartProducts
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
        default:
            return state;
        // '_FULFILLED, fulfills the promise, otherwise redux will not return the Array
        case PRODUCTS + '_FULFILLED':
        // console.log('test')
            return Object.assign( {}, state, {products: action.payload});
        case PRODUCT + '_FULFILLED':
            return Object.assign( {}, state, {product: action.payload});
        case ADD_TO_CART + '_FULFILLED':
            return Object.assign( {}, state, {addToCart: action.payload});
        case CART_PRODUCTS + '_FULFILLED':
            return Object.assign( {}, state, {cartProducts: action.payload});
    }

}