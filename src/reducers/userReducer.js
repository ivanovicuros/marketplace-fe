import { SET_USER, SET_ITEMS } from '../actions/userActions';

const initialState = {
    user: {
        id: 0,
        name: '',
        username: '',
        location: '',
        items: []
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER: 
            return {
                ...state,
                user: action.payload
            }
        case SET_ITEMS:
            return {
                ...state,
                user: {...state.user, items: action.payload}
            }
        default:
            return state;
    }
}

export default reducer;