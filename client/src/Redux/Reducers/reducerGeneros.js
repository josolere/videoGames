import { LISTAR__GENEROS, BUSCAR__GENERO } from '../constants/constant';


const initialState = {
    data: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case LISTAR__GENEROS:
            return {
                ...state,
                data: action.payload
            }
        
        default: return state
    }
}