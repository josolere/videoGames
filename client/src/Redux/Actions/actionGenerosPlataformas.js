import { NUEVO__GENERO, NUEVA__PLATAFORMA } from '../constants/constant'



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

