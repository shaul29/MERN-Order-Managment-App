import {
    PRODUCT_LIST_MY_REQUEST,
    PRODUCT_LIST_MY_SUCCESS,
    PRODUCT_LIST_MY_FAIL,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_RESET,
} from '../constants/productConstants'
import axios from 'axios'

export const listMyProducts = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_LIST_MY_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/product/myProducts`, config)

        dispatch({
            type: PRODUCT_LIST_MY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_MY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/product/${id}`, config)

        dispatch({
            type: PRODUCT_DELETE_SUCCESS
        })
        dispatch(listMyProducts())
    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const createProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/api/product`, product, config)

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data,
        })

        dispatch({
            type: PRODUCT_CREATE_RESET
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}