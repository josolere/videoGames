import { LISTAR__ASCENDENTE, LISTAR__DESCENDENTE } from '../constants/constant';

const initialState = {
    data: 'asc'
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LISTAR__ASCENDENTE:
            return {
                ...state,
                data:'asc'
            }
        case LISTAR__DESCENDENTE:
            return {
                ...state,
                data:'desc'
            }
        default: return state
    }
}