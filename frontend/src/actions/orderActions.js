import {
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_DELETE_FAIL,
    ORDER_DELETE_SUCCESS,
    ORDER_DELETE_REQUEST,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_RESET,
    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS,
    ORDER_UPDATE_FAIL
} from '../constants/orderConstants'
import axios from 'axios'

export const listMyorders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_LIST_MY_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/order/myorders`, config)

        dispatch({
            type: ORDER_LIST_MY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ORDER_LIST_MY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteOrder = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/order/${id}`, config)

        dispatch({
            type: ORDER_DELETE_SUCCESS
        })
        dispatch(listMyorders())
    } catch (error) {
        dispatch({
            type: ORDER_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
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

        const { data } = await axios.post(`/api/order`, order, config)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data,
        })

        dispatch({
            type: ORDER_CREATE_RESET
        })
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const updateOrder = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_UPDATE_REQUEST,
        })

        await axios.put(`/api/order/${id}`)

        dispatch({
            type: ORDER_UPDATE_SUCCESS
        })
        dispatch(listMyorders())
    } catch (error) {
        dispatch({
            type: ORDER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}