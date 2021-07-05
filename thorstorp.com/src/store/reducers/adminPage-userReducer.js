import actiontypes from "../actiontypes";
import {v4 as uuid} from 'uuid';

const initState = {
    users: [
        {
            id: '1',
            firstName: 'Max',
            lastName: 'Thorstorp',
            email: 'max_thorstorp@hotmail.com'
            }
    ],
    isUserClicked: null,
    user: {
        id: '',
        firstName: '',
        lastName: '',
        email: ''
    }
}

const userReducer = (state=initState, action) => {

    switch(action.type) {

        case actiontypes().user.add:
            return {...state,
               users: [ ...state.users,
               { id: uuid(),
                   ...action.payload
               }
            ]
            }

        case actiontypes().user.set:
            return {
                ...state,
                isUserClicked: true,
                
                user: {
                    id: action.payload.id,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    email: action.payload.email,
                }
                
                
                
                }

        case actiontypes().user.change:
            const changedUser = {
                id: uuid(),
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            }
            return {
                ...state,
                users: [...state.users.filter((x)=> x.id.toString() !== action.payload.id.toString()),
                    changedUser
                ]
                
            }

            case actiontypes().user.setUserIsclicked:
                return {
                    ...state,
                    isUserClicked: action.payload
                }

            case actiontypes().user.deleteUser:
                return {
                    
                    ...state,
                    users: state.users.filter(x => x.id.toString() !== action.payload.id.id.toString())
                    
                }


        default:
            return state;
    }
}

export default userReducer;