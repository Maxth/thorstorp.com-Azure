import actiontypes from "../actiontypes";

export const addUser = (payload)=> {
return {
    type: actiontypes().user.add,
    payload
}
}

// export const getUser = (payload) => {
//     return {
//     type: actiontypes().user.getUser,
//     payload
//     }
// }

export const set = (payload) => {
    return {
        type: actiontypes().user.set,
        payload
    }
}
export const change = (payload) => {
    return {
        type: actiontypes().user.change,
        payload
    }
}

export const setUserIsclicked = (payload) => {
    return {
        type: actiontypes().user.setUserIsclicked,
        payload
    }
}
export const deleteUser = (payload) => {
    return {
        type: actiontypes().user.deleteUser,
        payload
    }
}