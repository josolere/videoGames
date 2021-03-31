import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import creados from './FormCreados.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { listarGeneros } from '../../Redux/Actions/actionGeneros';
import { nuevoGenero, nuevaPlataforma, reset, resetGeneros, resetPlataforma } from '../../Redux/Actions/actionGenerosPlataformas'
import Axios from 'axios'


const FormCreados = () => {

    const dispatch = useDispatch()

    const generos = useSelector(store => store.reduceGeneros.data);
    const nuevoGeneros = useSelector(store => store.reducerGenPlat.genres);
    const nuevaPlataf = useSelector(store => store.reducerGenPlat.platforms);
    const generoId = useSelector(store => store.reducerGenPlat.id);


    const [mensaje, setMensaje] = useState(false)
    const [gener, setGener] = useState({ genres: null })
    const [platforma, setPlatforma] = useState({ platforms: null })
    const [plataforma, setPlataforma] = useState([])
    const [datos, setDatos] = useState({
        name: '',
        description: '',
        releaseDate: '',
        rating: '',
        platforms: [],
        genres: []
    })

    //ingresar generos a la base de datos
    useEffect(() => {
        setDatos({
            ...datos,
            genres: generoId
        })
    }, [generoId])


    // ingresar plataformas a la base de datos
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

    //crear videojuego cuando se da click al boton
    const crearVideojuego = async (e) => {
        e.preventDefault()
        await Axios.post('http://localhost:3001/videogames', datos)
            .then(result => {
                if (result.status === 201) {
                    setMensaje(true)
                } else {
                    setMensaje(false)
                }
            })
            .catch(error => {
                console.log(error)
            })
        setDatos({
            name: '',
            description: '',
            releaseDate: '',
            rating: '',
            platforms: [],
            genres: []
        })
        dispatch(reset())
        setTimeout(() => setMensaje(false), 3000);
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
        const nuvFilt = nuevoGeneros.filter(filt => filt.name === gener.genres)
        if (nuvFilt.length === 0) {
            let nuevoFiltrado = generos.filter(filt => filt.name === gener.genres)
            dispatch(nuevoGenero(nuevoFiltrado))
        }
    }

    // funcion filtra si ya esta la plataforma  y agrega una nueva plataforma si no esta 
    const guardarPlataforma = () => {
        const nuevfilt = nuevaPlataf.filter(filt => filt === platforma.platforms)
        if (nuevfilt.length === 0) {
            dispatch(nuevaPlataforma(platforma.platforms))
        }
    }

    const eliminarItemnGenero = (dato) => {
        dispatch(resetGeneros())
        const eliminar = nuevoGeneros.filter(fil => fil.name !== dato)
        if (eliminar.length !== 0) {
            dispatch(nuevoGenero(eliminar))
        }
    }
    const eliminarItemnPlataforma = (dato) => {
        dispatch(resetPlataforma())
        const eliminar = nuevaPlataf.filter(fil => fil !== dato)
        if (eliminar.length !== 0) {
            dispatch(nuevaPlataforma(eliminar))
        }
    }


    return (
        <>
            <div className={creados.body}>
                <div className={creados.contenedor__home__mensaje}>
                    <div className={creados.contenedor__mensaje}>
                        <div id={mensaje === true ? creados.mens : null} className={creados.mensaje}>VideoJuego creado exitosamente</div>
                    </div>
                    <div className={creados.contendor__link}>
                        <label className={creados.label__home}>HOME</label>
                        <Link to='/home' className={creados.contenedor__icono}> <FontAwesomeIcon icon={faHome} className={creados.icono} /></Link>
                    </div>
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
                            value={datos.description}
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
                                    onClick={() => { gener.genres !== 'Generos' && gener.genres !== null ? guardarGenero() : console.log('') }}
                                    className={creados.button__listar}
                                >
                                    In
                                </button>
                            </div>
                            <div className={creados.contenedor__plataformas}>
                                <label className={creados.label__plataformas}>Ingrese Plataformas</label>
                                <select
                                    name="platforms"
                                    className={creados.select__plataformas}
                                    onChange={handlePlataforma}
                                    value={platforma.platforms}
                                >
                                    <option>Plataformas</option>
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
                                    onClick={() => { platforma.platforms !== 'Plataformas' && platforma.platforms !== null ? guardarPlataforma() : console.log('') }}
                                    className={creados.button__listar}
                                >In</button>
                            </div>
                        </div>
                        <div className={creados.subcontenedor2}>
                            <div className={creados.contenedor__generos__agregados}>
                                <label>Generos</label>
                                <div className={creados.generos__agregados}>
                                    <ul>
                                        {
                                            nuevoGeneros.length !== 0 ?
                                                nuevoGeneros.map(mapeo => {
                                                    return <li>
                                                        <button
                                                            className={creados.button__listar}
                                                            type='button'
                                                            onClick={() => eliminarItemnGenero(mapeo.name)}>
                                                            X
                                                        </button>
                                                        {mapeo.name}
                                                    </li>
                                                }) : null
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className={creados.contenedor__plataformas__agregados}>
                                <label>Platafromas</label>
                                <div className={creados.agregados}>
                                    <ul>{
                                        nuevaPlataf.length !== 0 ?
                                            nuevaPlataf.map((mapeos, index) => {
                                                return <li key={index}>
                                                    <button
                                                        className={creados.button__listar}
                                                        type='button'
                                                        onClick={() => eliminarItemnPlataforma(mapeos)}>
                                                        X
                                                        </button>
                                                    {mapeos}</li>
                                            }) : null
                                    }
                                    </ul>
                                </div>
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
