import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

const initialState = {
    loading: false,
    users: [],
    error: ""
}

export default reducer =(state, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            error:""
        }
        case FETCH_USERS_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload
        }
    }
}