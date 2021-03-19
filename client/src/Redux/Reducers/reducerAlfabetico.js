import { LISTAR__ALFABETICO, LISTAR__RATING } from '../constants/constant';

const initialState = {
    data: 'alfabetico'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LISTAR__ALFABETICO:
            return {
                ...state,
                data: 'alfabetico'
            }
        case LISTAR__RATING:
            return {
                ...state,
                data: 'rating'
            }
        default: return state
    }
}