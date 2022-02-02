import { ERROR, SUCCESS} from '../actions/index'

export const initialState = {
    successMsg: '',
    errorMsg: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ERROR:
            return {
                ...state,
                successMsg: '',
                errorMsg: action.payload
            };
        case SUCCESS:
            return {
                ...state,
                successMsg: action.payload,
                errorMsg: ''
            }    
        default:
            return state;    
    }
}

export default reducer;