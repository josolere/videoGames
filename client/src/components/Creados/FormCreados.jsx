import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import creados from './FormCreados.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { listarGeneros } from '../../Redux/Actions/actionGeneros';
import { nuevoGenero, nuevaPlataforma } from '../../Redux/Actions/actionGenerosPlataformas'
import Axios from 'axios'


const FormCreados = () => {
    const dispatch = useDispatch()

    const generos = useSelector(store => store.reduceGeneros.data);
    const nuevoGeneros = useSelector(store => store.reducerGenPlat.genres);
    const nuevaPlataf = useSelector(store => store.reducerGenPlat.platforms);

    const [gener, setGener] = useState({ genres: [] })
    const [platforma, setPlatforma] = useState({ platforms: [] })
    const [plataforma, setPlataforma] = useState([])
    const [datos, setDatos] = useState({
        name: '',
        description: '',
        releaseDate: '',
        rating: '',
        platforms: [],
        genres: []
    })

    useEffect(() => {
        setDatos({
            ...datos,
            genres: nuevoGeneros
        })
    }, [nuevoGeneros])


    useEffect(() => {
        setDatos({
            ...datos,
            platforms: nuevaPlataf
        })
    }, [nuevaPlataf])


    useEffect(() => {
        dispatch(listarGeneros())
    }, [dispatch])

    useEffect(async () => {
        const platform = await Axios.get('https://api.rawg.io/api/platforms')
        setPlataforma(platform.data.results)
    }, [])

    const crearVideojuego = async (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/videogames', datos)
        try {
            console.log(creados)
        } catch (error) {
            console.log(error)
        }

        setDatos({
            name: '',
            description: '',
            releaseDate: '',
            rating: '',
            platforms: [],
            genres: []
        })
        
    }

    const handleInput = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handleGenero = (e) => {
        setGener({
            ...gener,
            [e.target.name]: e.target.value
        })
    }

    const handlePlataforma = (e) => {
        setPlatforma({
            ...platforma,
            [e.target.name]: e.target.value
        })
    }

    // funcion filtra si ya esta el genero  y agrega el genero si no esta 
    const guardarGenero = () => {
        const nuvFilt = nuevoGeneros.filter(filt => filt === gener.genres)
        if (nuvFilt.length === 0) {
            dispatch(nuevoGenero(gener.genres))
        }
    }

    // funcion filtra si ya esta la plataforma  y agrega una nueva plataforma si no esta 
    const guardarPlataforma = () => {
        const nuevfilt = nuevaPlataf.filter(filt => filt === platforma.platforms)
        if (nuevfilt.length === 0) {
            dispatch(nuevaPlataforma(platforma.platforms))
        }
    }

    return (
        <>
            <div className={creados.body}>
                <div className={creados.contendor__link}>
                    <label className={creados.label__home}>HOME</label>
                    <Link to='/home' className={creados.contenedor__icono}> <FontAwesomeIcon icon={faHome} className={creados.icono} /></Link>
                </div>
                <form className={creados.form}>
                    <div className={creados.contenedor__nombre}>
                        <label htmlFor="nombre" className={creados.label__nombre}>Ingrese El Nombre Del Videojuego</label>
                        <input
                            type="text"
                            id='nombre'
                            name='name'
                            className={creados.input__nombre}
                            onChange={handleInput}
                            value={datos.name}

                        />
                    </div>
                    <div className={creados.contenedor__descripcion}>
                        <label htmlFor="descripcion" className={creados.label__descripcion}>Ingrese una Descripcion Del Videojuego</label>
                        <textarea
                            className={creados.textarea__descripcion}
                            name="description"
                            id="descripcion"
                            cols="30"
                            rows="10"
                            onChange={handleInput}
                            value={datos.descripcion}
                        />
                    </div>
                    <div className={creados.subcontenedor}>
                        <div className={creados.subcontenedor1}>
                            <div className={creados.contenedor__fecha}>
                                <label htmlFor="fecha" className={creados.label__fecha}>Ingrese Fecha De Creacion</label>
                                <input
                                    type="date"
                                    id="fecha"
                                    min='1900-01-01'
                                    max='2021-03-19'
                                    className={creados.input__fecha}
                                    name='releaseDate'
                                    onChange={handleInput}
                                    value={datos.releaseDate}
                                />
                            </div>
                            <div className={creados.contenedor__rating}>
                                <label htmlFor="rating" className={creados.label__rating}>Ingrese Rating</label>
                                <input
                                    type="text"
                                    id='rating'
                                    className={creados.input__rating}
                                    name='rating'
                                    onChange={handleInput}
                                    value={datos.rating}
                                />
                            </div>
                            <div className={creados.contenedor__generos}>
                                <label className={creados.label__generos}>Ingrese Generos</label>
                                <select
                                    name="genres"
                                    className={creados.select__generos}
                                    onChange={handleGenero}
                                    value={gener.genres}
                                >
                                    <option>Generos</option>
                                    {generos.map((mapeo, index) => {
                                        return <option key={index} >{mapeo.name}</option>
                                    })}

                                </select>
                                <button
                                    type='button'
                                    onClick={() => { guardarGenero() }}
                                    className={creados.button__listar}

                                >In</button>
                            </div>
                            <div className={creados.contenedor__plataformas}>
                                <label className={creados.label__plataformas}>Ingrese Plataformas</label>
                                <select
                                    name="platforms"
                                    className={creados.select__plataformas}
                                    onChange={handlePlataforma}
                                    value={platforma.platforms}
                                >
                                    <option >Plataformas</option>
                                    {
                                        plataforma.length !== 0 ?
                                            plataforma.map(mapeo => {
                                                return <option >{mapeo.name}</option>
                                            })
                                            : null
                                    }
                                </select>
                                <button
                                    type='button'
                                    onClick={() => { guardarPlataforma() }}
                                    className={creados.button__listar}
                                >In</button>
                            </div>
                        </div>
                        <div className={creados.subcontenedor2}>
                            <div>
                                <label>Generos</label>
                                <ul>
                                    {
                                        nuevoGeneros.length !== 0 ?
                                            nuevoGeneros.map(mapeo => {
                                                return <li> {mapeo} </li>
                                            }) : null
                                    }
                                </ul>
                            </div>
                            <div>
                                <label>Platafromas</label>
                                <ul>{
                                    nuevaPlataf.length !== 0 ?
                                        nuevaPlataf.map(mapeo => {
                                            return <li>{mapeo}</li>
                                        }) : null
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={creados.contenedor__button}>
                        <button
                        className={creados.button}
                        type='submit'
                        onClick={crearVideojuego}                        
                        >
                            Crear Videojuego
                  </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormCreados
