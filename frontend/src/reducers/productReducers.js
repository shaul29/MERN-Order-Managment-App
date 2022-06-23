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
    PRODUCT_CREATE_RESET,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
    PRODUCT_UPDATEQTY_REQUEST,
    PRODUCT_UPDATEQTY_SUCCESS,
    PRODUCT_UPDATEQTY_FAIL,
    PRODUCT_UPDATEQTY_RESET,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_RESET
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

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_DETAILS_RESET:
            return {}
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

export const productCreateReducer = (state = {}, action) => {
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

export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_UPDATE_RESET:
            return { product: {} }
        default:
            return state
    }
}

export const productUpdateQtyReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATEQTY_REQUEST:
            return { loading: true }
        case PRODUCT_UPDATEQTY_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_UPDATEQTY_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_UPDATEQTY_RESET:
            return { product: {} }
        default:
            return state
    }
}