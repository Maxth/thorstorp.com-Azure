const actiontypes =() => {
    return {
        user: {
            add: 'ADD',
            deleteUser: 'DELETE_USER',
            change: 'CHANGE',
            getUser: 'GET_USER',
            fetchUsers: 'FETCH_USERS',
            set: 'SET',
            setUserIsclicked: 'SET_USER_IS_CLICKED'
        }
    }
}

export default actiontypes;