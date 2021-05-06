import {
    CLIENT_LIST_MY_REQUEST,
    CLIENT_LIST_MY_SUCCESS,
    CLIENT_LIST_MY_FAIL,
    CLIENT_LIST_MY_RESET,
    CLIENT_DELETE_FAIL,
    CLIENT_DELETE_SUCCESS,
    CLIENT_DELETE_REQUEST,
    CLIENT_CREATE_REQUEST,
    CLIENT_CREATE_SUCCESS,
    CLIENT_CREATE_FAIL,
    CLIENT_CREATE_RESET
} from '../constants/clientConstants'

export const clientListMyReducer = (state = { clients: [] }, action) => {
    switch (action.type) {
        case CLIENT_LIST_MY_REQUEST:
            return {
                loading: true,
            }
        case CLIENT_LIST_MY_SUCCESS:
            return {
                loading: false,
                clients: action.payload,
                success: true
            }
        case CLIENT_LIST_MY_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case CLIENT_LIST_MY_RESET:
            return { clients: [] }

        default:
            return state
    }
}

export const clientDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CLIENT_DELETE_REQUEST:
            return { loading: true }
        case CLIENT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case CLIENT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const clientCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CLIENT_CREATE_REQUEST:
            return { loading: true }
        case CLIENT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case CLIENT_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case CLIENT_CREATE_RESET:
            return {}
        default:
            return state
    }
}