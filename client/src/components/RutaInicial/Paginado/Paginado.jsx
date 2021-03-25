import React, { useEffect, useState } from 'react'
import pagina from './Paginado.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import {paginaIzquierda, paginaDerecha} from '../../../Redux/Actions/actionPaginado'

const Paginado = () => {

     const dispatch = useDispatch()

    const [click, setClick] = useState(false)
    const [clickRight, setClickRight] = useState(false)
    const [valorTamano, setValorTamano] = useState('')
    const [count, setCount] = useState([])

    const tamano = useSelector(store => store.reducerPaginado)
    console.log(tamano)

    useEffect(() => {
       setValorTamano(tamano.limite/6)
        
    }, [tamano])
    

   

    return (
        <>
            <div className={pagina.contenedor}>
                <button
                    id={click === true ? pagina.click : null}
                    onClick={() => {
                        dispatch(paginaIzquierda())
                        setClick(true)
                        setTimeout(() => setClick(false), 200);
                    }}
                    className={pagina.button__icon1}>
                    <FontAwesomeIcon className={pagina.icono} icon={faArrowAltCircleLeft} />
                </button>
                <div className={pagina.contenedor__numeros}>
                    {
                        
                       
                    }
                    
                   
                </div>
                <button
                    className={pagina.button__icon2}
                    id={clickRight === true ? pagina.clickRight : null}
                    onClick={() => {
                        dispatch(paginaDerecha())
                        setClickRight(true)
                        setTimeout(() => setClickRight(false), 200);
                    }}
                >
                    <FontAwesomeIcon className={pagina.icono}
                        icon={faArrowAltCircleRight} />
                </button>
            </div>
        </>
    )
}

export default Paginado
