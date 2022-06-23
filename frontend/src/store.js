import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    userLoginReducer,
    userRegisterReducer,
} from './reducers/userReducers'
import {
    clientListMyReducer,
    clientDeleteReducer,
    clientCreateReducer,
    clientListOneReducer,
    clientUpdateReducer
} from './reducers/clientReducers'
import {
    productListMyReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    productUpdateQtyReducer,
    productDetailsReducer
} from './reducers/productReducers'

import {
    orderListMyReducer,
    orderDeleteReducer,
    orderCreateReducer,
    orderUpdateReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    clientListMy: clientListMyReducer,
    clientDelete: clientDeleteReducer,
    clientListOne: clientListOneReducer,
    clientCreate: clientCreateReducer,
    clientUpdate: clientUpdateReducer,
    productListMy: productListMyReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDetails: productDetailsReducer,
    orderListMy: orderListMyReducer,
    orderDelete: orderDeleteReducer,
    orderCreate: orderCreateReducer,
    orderUpdate: orderUpdateReducer,
    productUpdateQty: productUpdateQtyReducer,

})


const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store