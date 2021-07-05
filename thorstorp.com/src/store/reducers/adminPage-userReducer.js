import actiontypes from "../actiontypes";

const initState = [
    {
        id: '1',
        firstName: 'Max',
        lastName: 'Thorstorp',
        email: 'max_thorstorp@hotmail.com'
    }
]

const userReducer = (state = initState, action) => {

    switch(action.type) {


        default:
            return state;
    }
}

export default userReducer;