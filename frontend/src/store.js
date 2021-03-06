import {createStore ,combineReducers, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import {
    productDeleteReducer,
    productDetailsReducer,
    productListReducer, productReviewSaveReducer,
    productSaveReducer
} from './reducers/productReducers';
import {cartReducer} from "./reducers/cartReducers";
import {userRegisterReducer, userSigninReducer, userUpdateReducer} from "./reducers/userReducers";
import {
    myOrderListReducer,
    orderCreateReducer, orderDeleteReducer,
    orderDetailsReducer,
    orderListReducer,
    orderPayReducer
} from "./reducers/orderReducers";
const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;


const reducer = combineReducers({

    productList: productListReducer,
    productDetails:productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave:productSaveReducer,
    productDelete:productDeleteReducer,
    productReviewSave: productReviewSaveReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
})
const initialState = {
    cart: { cartItems},
    userSignin: { userInfo },

};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;
