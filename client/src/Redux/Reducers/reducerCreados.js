import { CREADOS } from '../constants/constant';

const initialState = {
    data: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case CREADOS:
            return {
                ...state,
                data: action.payload
            }
            default: return state
    }
}