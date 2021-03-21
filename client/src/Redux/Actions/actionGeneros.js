import {LISTAR__GENEROS, BUSCAR__GENERO} from '../constants/constant'
import Axios from 'axios'



export const listarGeneros = () => async(dispatch) =>{
    const genero = await Axios('http://localhost:3001/genres')
    dispatch({
        type:LISTAR__GENEROS,
        payload:genero.data
    })
}



export const buscarGeneros = (datos) => async(dispatch) =>{
    if(datos.tipos !== 'Generos'){
    const generos = await Axios(`http://localhost:3001/genres?name=${datos.tipos}`)
    dispatch({
        type:BUSCAR__GENERO,
        payload:generos.data
    })
}
}