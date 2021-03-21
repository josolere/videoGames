import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import card from './CardGeneral.module.css'
import Generos from './Generos'
import {useDispatch} from 'react-redux'
import {especificos} from '../../../Redux/Actions/actionEspecifico'

const CardGeneral = (props) => {
  const [inicio, setInicio] = useState([]);
  const [genre, setGenre] = useState([]);

  const dispatch = useDispatch()


  useEffect(() => {
    setInicio(props.datos)
    setGenre(props.datos.genres)
  }, [props])


  return (
    <>
      { typeof inicio === 'string' ?
        <div className={card.contenedor__card__mensaje}>
          <div className={card.card__mensaje}>
            <h1>
              {inicio}
            </h1>
          </div>
        </div>
        :
        <div className={card.contenedor}>
          <div className={card.contenedor2}>
            <div className={card.contenedor__titulo}>
              <h4 className={card.rating}>Rating <span>{inicio.rating}</span></h4>
              <h1 className={card.titulo}>{inicio.name}</h1>
            </div>
            <div className={card.subcontenedor}>
              <h2 className={card.titulo__subcontenedor}>Genero</h2>
              <div className={card.genero}>
                {genre.length === 0 ? <p>cargando...</p> : genre.map((mapeo, index) => {
                  return <Generos genero={mapeo} key={index} />
                })}
              </div>
            </div>
            <div className={card.contenedor__imagen}>
              <img src={inicio.image} alt="videojuego" className={card.imagen} />
            </div>
            <div className={card.contenedor__button__especifico}>
              <Link
                to='home/detalles'
                className={card.button__especifico}
                type='submit'
                onClick={()=> dispatch(especificos(inicio.id))}
                >
                Datos Especifico
              </Link>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default CardGeneral
