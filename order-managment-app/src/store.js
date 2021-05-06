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
    clientCreateReducer
} from './reducers/clientReducers'
import {
    productListMyReducer,
    productDeleteReducer,
    productreateReducer
} from './reducers/productReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    clientListMy: clientListMyReducer,
    clientDelete: clientDeleteReducer,
    clientCreate: clientCreateReducer,
    productListMy: productListMyReducer,
    productDelete: productDeleteReducer,
    productCreate: productreateReducer,
})


const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store