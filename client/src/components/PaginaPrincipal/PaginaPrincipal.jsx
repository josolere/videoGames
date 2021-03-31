import React from 'react';
import { Link } from 'react-router-dom';
import principal from './PaginaPrincipal.module.css'

const PaginaPrincipal = () => {
    return (
        <>
            <div className={principal.contenedor}>
                <div className={principal.bienvenida}>
                    <p>Para Ingresar </p>
                    <p>Dar click a la <span>X</span></p>
                </div>
                <div className={principal.contenedor__link}>
                    <div className={principal.imagen__fondo}>
                        <Link to='/home' className={principal.button}>x</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaginaPrincipal
