import { NUEVO__GENERO, NUEVA__PLATAFORMA, RESET, RESET__GENEROS, RESET__PLATAFORMA } from '../constants/constant'



export const nuevoGenero = (payload) => {  
    return {
        type: NUEVO__GENERO,
        payload
    }
}

export const nuevaPlataforma = (payload) =>{
return{
    type:NUEVA__PLATAFORMA,
    payload
}
}

export const reset = () =>{
    return{
        type:RESET
    }
}

export const resetGeneros = () =>{
    return {
        type:RESET__GENEROS
    }
}

export const resetPlataforma = () =>{
    return{
        type:RESET__PLATAFORMA
    }
}

