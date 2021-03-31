import { PAGINA__IZQUIERDA, PAGINA__DERECHA, LIMITE, RESET__PAGINADO, NUMERO__DE__PAGINA, RESET__PAGINADO__SIN__LIMITE } from '../constants/constant';


const inictialState = {
    inicio: 0,
    fin: 6,
    limite: 0
}

export default (state = inictialState, action) => {
    switch (action.type) {
        case PAGINA__IZQUIERDA:
            return {
                ...state,
                inicio: state.inicio > 0 ? state.inicio - 6 : state.inicio = 0,
                fin: state.fin > 6 ? state.fin - 6 : state.fin = 6
            }
        case PAGINA__DERECHA:
            return {
                ...state,
                inicio: state.limite - 6 > state.inicio ? state.inicio + 6 : state.inicio,
                fin: state.limite > state.fin ? state.fin + 6 : state.fin
            }

        case LIMITE:
            return {
                ...state,
                limite: action.payload
            }
        case RESET__PAGINADO:
            return {
                ...state,
                inicio: state.inicio = 0,
                fin: state.fin = 6,
                limite: state.limite = 0
            }

            case RESET__PAGINADO__SIN__LIMITE:
                return {
                    ...state,
                    inicio: state.inicio = 0,
                    fin: state.fin = 6,
                }

        case NUMERO__DE__PAGINA:
            return {
                ...state,
                inicio:state.fin*action.payload - 6,
                fin:state.fin*action.payload
            }

        default: return state
    }
}