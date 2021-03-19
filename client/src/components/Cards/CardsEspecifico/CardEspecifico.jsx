import React from 'react'
import { Link } from 'react-router-dom'
import cardEsp from './CardEspecifico.module.css'

const CardEspecifico = () => {
    return (
        <>
            <div className={cardEsp.contenedor__body}>
                <div>
                    <Link to='/detalles'></Link>
                </div>
            </div>
        </>
    )
}

export default CardEspecifico
