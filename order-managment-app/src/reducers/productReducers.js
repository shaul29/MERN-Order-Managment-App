import {
    PRODUCT_LIST_MY_REQUEST,
    PRODUCT_LIST_MY_SUCCESS,
    PRODUCT_LIST_MY_FAIL,
    PRODUCT_LIST_MY_RESET,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET
} from '../constants/productConstants'

export const productListMyReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_MY_REQUEST:
            return {
                loading: true,
            }
        case PRODUCT_LIST_MY_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                success: true
            }
        case PRODUCT_LIST_MY_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case PRODUCT_LIST_MY_RESET:
            return { products: [] }

        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE_RESET:
            return {}
        default:
            return state
    }
}