import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import cardEsp from './CardEspecifico.module.css'

const CardEspecifico = () => {

    const detalles = useSelector(store => store.reducerEspecifico)
    return (
        <>
            <div className={cardEsp.contenedor__body}>
                <div className={cardEsp.contenedor__link}>
                    <Link className={cardEsp.link__home} to='/home'>volver</Link>
                </div>
                <div className={cardEsp.contenedor__card}>
                    <div className={cardEsp.subContenedor1}>
                        <div className={cardEsp.contenedor__titulo}>
                            <h1>
                                {detalles.name}
                            </h1>
                        </div>
                        <div className={cardEsp.contenedor__imagen}>
                            <img src={detalles.image} alt="videojuegos" className={cardEsp.imagen} />
                        </div>
                        <div className={cardEsp.contenedor__fecha}>
                            <label>Fecha De Creacion:</label>
                            <p>{detalles.releaseDate}</p>
                        </div>
                    </div>
                    <div className={cardEsp.subContenedor2}>
                        <div className={cardEsp.contenedor__genero}>
                            <label>Generos:</label>
                            <ul className={cardEsp.lista__genero}>
                                {detalles.genres.map(mapeo => {
                                    return <li>{mapeo}</li>
                                })}
                            </ul>
                        </div>
                        <div className={cardEsp.contenedor__descripcion}>
                            <label>Descripcion:</label>
                            <p className={cardEsp.p__description}>{detalles.description}</p>
                        </div>
                       
                        <div className={cardEsp.contenedor__rating}>
                            <label>Rating</label>
                            <p>{detalles.rating}</p>
                        </div>
                        <div className={cardEsp.contenedor__plataforma}>
                            <label>Plataformas</label>
                            <ul className={cardEsp.lista__plataformas}>
                                {detalles.platforms.map(mapeo => {
                                    return <li className={cardEsp.li__plataformas}>{mapeo}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardEspecifico
