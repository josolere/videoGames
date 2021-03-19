import { LISTAR__DESCENDENTE, LISTAR__ASCENDENTE, LISTAR__ALFABETICO, LISTAR__RATING} from '../constants/constant'

export const listarAscendente = () =>{
    return {
         type:LISTAR__ASCENDENTE         
    }
 }
 
 export const listarDescendente = () =>{
   return{
         type:LISTAR__DESCENDENTE         
     }
 }


 export const listarAlfabetico = () =>{
     return {
         type:LISTAR__ALFABETICO
     }
 }

 export const listarRating = () =>{
     return {
         type:LISTAR__RATING
     }
 }