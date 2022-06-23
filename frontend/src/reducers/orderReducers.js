import {
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_RESET,
    ORDER_DELETE_FAIL,
    ORDER_DELETE_SUCCESS,
    ORDER_DELETE_REQUEST,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,
    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS,
    ORDER_UPDATE_FAIL
} from '../constants/orderConstants'

export const orderListMyReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_MY_REQUEST:
            return {
                loading: true,
            }
        case ORDER_LIST_MY_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
                success: true
            }
        case ORDER_LIST_MY_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case ORDER_LIST_MY_RESET:
            return { orders: [] }

        default:
            return state
    }
}

export const orderDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_DELETE_REQUEST:
            return { loading: true }
        case ORDER_DELETE_SUCCESS:
            return { loading: false, success: true }
        case ORDER_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true }
        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case ORDER_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const orderUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_UPDATE_REQUEST:
            return { loading: true }
        case ORDER_UPDATE_SUCCESS:
            return { loading: false, success: true }
        case ORDER_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}