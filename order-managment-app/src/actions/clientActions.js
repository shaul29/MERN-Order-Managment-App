import {
    CLIENT_LIST_MY_REQUEST,
    CLIENT_LIST_MY_SUCCESS,
    CLIENT_LIST_MY_FAIL,
    CLIENT_DELETE_FAIL,
    CLIENT_DELETE_SUCCESS,
    CLIENT_DELETE_REQUEST,
    CLIENT_CREATE_FAIL,
    CLIENT_CREATE_SUCCESS,
    CLIENT_CREATE_REQUEST,
    CLIENT_CREATE_RESET,
    CLIENT_LIST_ONE_REQUEST,
    CLIENT_LIST_ONE_SUCCESS,
    CLIENT_LIST_ONE_FAIL,
} from '../constants/clientConstants'
import axios from 'axios'

export const listMyClients = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLIENT_LIST_MY_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/client/myClients`, config)

        dispatch({
            type: CLIENT_LIST_MY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CLIENT_LIST_MY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listOneClient = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLIENT_LIST_ONE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/client/${id}`, config)

        dispatch({
            type: CLIENT_LIST_ONE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CLIENT_LIST_ONE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteClient = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLIENT_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/client/${id}`, config)

        dispatch({
            type: CLIENT_DELETE_SUCCESS
        })
        dispatch(listMyClients())
    } catch (error) {
        dispatch({
            type: CLIENT_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const createClient = (client) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLIENT_CREATE_REQUEST,
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

        const { data } = await axios.post(`/api/client`, client, config)

        dispatch({
            type: CLIENT_CREATE_SUCCESS,
            payload: data,
        })

        dispatch({
            type: CLIENT_CREATE_RESET
        })
    } catch (error) {
        dispatch({
            type: CLIENT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}