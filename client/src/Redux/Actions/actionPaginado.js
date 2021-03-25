import {PAGINA__IZQUIERDA, PAGINA__DERECHA, LIMITE, RESET__PAGINADO} from '../constants/constant'



export const paginaIzquierda = () =>{
    return{
        type:PAGINA__IZQUIERDA
    }
}

export const paginaDerecha = () =>{
    return{
        type:PAGINA__DERECHA
    }
}

export const limite = (payload) =>{
    return {
        type:LIMITE,
        payload
    }
}

export const resetPaginado = () =>{
    return{
        type:RESET__PAGINADO
    }
}