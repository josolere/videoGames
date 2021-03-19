import { INICIOS, LISTAR__ASCENDENTE, LISTAR__DESCENDENTE } from '../constants/constant'

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INICIOS:
            return {
                ...state,
                data: action.payload
            }
       
        default: return state
    }
}