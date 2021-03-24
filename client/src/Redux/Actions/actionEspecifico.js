import {DATOS__ESPECIFICOS} from '../constants/constant';
import Axios from 'axios';



export const especificos = (datos) => async(dispatch) =>{
    const id = datos
    console.log(id)
    const detalle = await Axios.get(`http://localhost:3001/videogame/${id}`)
    dispatch({
        type:DATOS__ESPECIFICOS,
        payload:[detalle.data]
    })

}