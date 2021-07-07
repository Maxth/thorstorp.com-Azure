import actiontypes from "../actiontypes";


const initState = {
    users: [],
    isUserClicked: null,
    user: {
        _id:'',
        firstName: '',
        lastName:'',
        email: ''
    },
    error: undefined
}

const userReducer = (state=initState, action) => {

    switch(action.type) {


        case actiontypes().user.addUserFailure:
            return{
                ...state,
                error: action.payload
            }

        case actiontypes().user.set:
            return {
                ...state,
                isUserClicked: true,
                
                user: action.payload.props
                
                
                
                }

        case actiontypes().user.changeUserFailure:
            return {
                    
                ...state,
                error: action.payload
                
            }

            case actiontypes().user.setUserIsclicked:
                return {
                    ...state,
                    isUserClicked: action.payload
                }

           
            case actiontypes().user.deleteUserFailure:
                return {
                    
                    ...state,
                    error: action.payload
                    
                }

            case actiontypes().user.getAllSuccess:
                return {
                    ...state,
                    users: action.payload,
                }
            case actiontypes().user.getAllFailure:
                return {
                    ...state,
                    error: action.payload
                }

        default:
            return state;
    }
}

export default userReducer;