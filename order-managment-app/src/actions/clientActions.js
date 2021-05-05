import {
    CLIENT_LIST_MY_REQUEST,
    CLIENT_LIST_MY_SUCCESS,
    CLIENT_LIST_MY_FAIL,
    CLIENT_DELETE_FAIL,
    CLIENT_DELETE_SUCCESS,
    CLIENT_DELETE_REQUEST,
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