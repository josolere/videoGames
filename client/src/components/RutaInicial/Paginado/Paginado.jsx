import React, { useEffect, useState } from 'react'
import pagina from './Paginado.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { paginaIzquierda, paginaDerecha, paginaNumero , resetPaginadoSinLimite} from '../../../Redux/Actions/actionPaginado'

const Paginado = () => {

    const dispatch = useDispatch()

    const [click, setClick] = useState(false)
    const [clickRight, setClickRight] = useState(false)
    const [valorTamano, setValorTamano] = useState('')
    const [count, setCount] = useState([])

    const tamano = useSelector(store => store.reducerPaginado)
    console.log(tamano)

    // useEffect(() => {
    //     setValorTamano(tamano.limite / 6)
    // }, [tamano])

    const numeroDePaginas = []

    for (let i = 1; i <= Math.ceil(tamano.limite / 6); i++) {
        numeroDePaginas.push(i)
    }
    console.log(numeroDePaginas)

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
                        numeroDePaginas.map((mapeo, index) => {
                            return <button 
                            onClick={() =>{
                                dispatch(resetPaginadoSinLimite())
                                dispatch(paginaNumero(mapeo))
                            }}
                            className={pagina.button__numero__pagina}
                            key={index}>
                                {mapeo}
                            </button>
                        })
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
