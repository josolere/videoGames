import Axios from 'axios'
import {INICIOS} from '../constants/constant'


export const listaGeneral = (datos) => async(dispatch) =>{
    if(Object.values(datos).length !== 0){        
        const todos = await Axios.get(`http://localhost:3001/videogames?name=${datos.name}`)        
        dispatch({
            type:INICIOS,
            payload:todos.data
        })
    } else{
        const todos = await Axios.get('http://localhost:3001/videogames')
        dispatch({
            type:INICIOS,
            payload:todos.data
        })
    }
}

