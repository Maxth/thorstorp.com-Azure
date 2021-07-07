import actiontypes from "../actiontypes";
import axios from 'axios';
import {v4 as uuid} from 'uuid';

export const addUser = (payload) => {
    return async dispatch => {
        try {
            console.log(payload)
            await axios({
                method: 'post',
                url: 'http://localhost:9998/api/users/',
                data: {
                    _id: uuid(),
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email
                }
            })
            dispatch(addUserSuccess(payload))
        } catch (err) {
            dispatch(addUserFailure(err.message))
        }
    }
}

export const addUserSuccess = (payload) => {
    return dispatch => {
        dispatch(getAll());
    }
}
export const addUserFailure = (payload) => {
    return {
        type: actiontypes().user.addUserFailure,
        payload
    }
}

export const getAll = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://localhost:9998/api/users/')
            dispatch(getAllSuccess(res.data))
        } catch (err) {
            dispatch(getAllFailure(err.message))
        }
    }
}


export const getAllSuccess = (users) => {
    return {
        type: actiontypes().user.getAllSuccess,
        payload: users
    }
}
export const getAllFailure = (err) => {
    return {
        type: actiontypes().user.getAllFailure,
        payload: err
    }
}


export const set = (payload) => {
    return {
        type: actiontypes().user.set,
        payload
    }
}
export const changeUser = (payload) => {
    return async dispatch => {
        try {await axios({
            method: 'patch',
            url: 'http://localhost:9998/api/users/',
            data: {
                _id: payload._id,
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email
            }
        })

        dispatch(changeUserSuccess())
    } catch (err) {
        dispatch(changeUserFailure(err.message))
    }
    }
}

export const changeUserFailure = (payload) => {
    return {
        type: actiontypes().user.changeUserFailure,
        payload
    }
}

export const changeUserSuccess = () => {
    return dispatch => {
        dispatch(getAll());
    }
        
    
}

export const setUserIsclicked = (payload) => {
    return {
        type: actiontypes().user.setUserIsclicked,
        payload
    }
}
export const deleteUser = (payload) => {
    return async dispatch => {
        try {
            await axios({
                method: 'delete',
                url: 'http://localhost:9998/api/users/',
                data: {
                    _id: payload._id.toString()
                }
            })
            dispatch(deleteUserSuccess())
        } catch (err) {
            dispatch(deleteUserFailure(err.message))
        }
    }
}

export const deleteUserSuccess = () => {
    return dispatch => {
        dispatch(getAll());
    }

}
export const deleteUserFailure = (payload) => {
    return {
        type: actiontypes().user.deleteUserFailure,
        payload
    }

}