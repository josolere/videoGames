import { PAGINA__IZQUIERDA, 
    PAGINA__DERECHA, LIMITE, 
    RESET__PAGINADO, 
    NUMERO__DE__PAGINA, 
    RESET__PAGINADO__SIN__LIMITE } from '../constants/constant'



export const paginaIzquierda = () => {
    return {
        type: PAGINA__IZQUIERDA
    }
}

export const paginaDerecha = () => {
    return {
        type: PAGINA__DERECHA
    }
}

export const limite = (payload) => {
    return {
        type: LIMITE,
        payload
    }
}

export const resetPaginado = () => {
    return {
        type: RESET__PAGINADO
    }
}

export const paginaNumero = (payload) => {
    return {
        type: NUMERO__DE__PAGINA,
        payload
    }
}

export const resetPaginadoSinLimite = () => {
    return {
        type: RESET__PAGINADO__SIN__LIMITE
    }
}