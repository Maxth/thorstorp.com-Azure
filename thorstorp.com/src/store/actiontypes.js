const actiontypes =() => {
    return {
        user: {
            getAllSuccess: 'GET_ALL_SUCCESS',
            getAllFailure: 'GET_ALL_FAILURE',
            addUser: 'ADD_USER',
            addUserSuccess: 'ADD_USER_SUCCESS',
            addUserFailure: 'ADD_USER_FAILURE',

            deleteUser: 'DELETE_USER',
            deleteUserSuccess: 'DELETE_USER_SUCCESS',
            deleteUserFailure: 'DELETE_USER_FAILURE',
            changeUser: 'CHANGE_USER',
            changeUserSuccess: 'CHANGE_USER_SUCCESS',
            changeUserFailure: 'CHANGE_USER_FAILURE',
            getUser: 'GET_USER',
            fetchUsers: 'FETCH_USERS',
            set: 'SET',
            setUserIsclicked: 'SET_USER_IS_CLICKED',

        }
    }
}

export default actiontypes;