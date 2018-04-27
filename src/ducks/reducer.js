import axios from "axios";

// Set initialState
const initialState = {
    user: {},
    products: null
}

// Create our Action types with const and variable is ALL CAPS!
const PRODUCTS = 'PRODUCTS';
const GET_USER_INFO = 'GET_USER_INFO';


// Action Creator Functions return a 'type' and 'payload'

export function getProducts() {
    let products = axios.get(`/api/getAllProducts`).then(res => {
        console.log('test', res.data)
        return res.data
    }); 
        return { 
            type: PRODUCTS,
            payload: products
    }
    
}


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

// Add the function reducer with the parameters 'state' set to equal initialState and 'action'
export default function reducer(state=initialState, action) {
    // console.log(action)
    switch(action.type) {
        case PRODUCTS + '_FULFILLED':
        // console.log('test')
            return Object.assign( {}, state, {products: action.payload});
            
        // Add our action types to our reducer
        case GET_USER_INFO + '_FULFILLED':
        // Use Object.assign to get the previous value of state and update it's property on the payload.
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }

}