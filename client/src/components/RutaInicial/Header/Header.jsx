import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import head from './Header.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { listarAscendente, listarDescendente, listarAlfabetico, listarRating } from '../../../Redux/Actions/actionOrdenar'
import { listaGeneral } from '../../../Redux/Actions/actionGeneral'
import { listarGeneros, buscarGeneros } from '../../../Redux/Actions/actionGeneros'


const Header = () => {
    const dispatch = useDispatch()

    const [datos, setDatos] = useState({ name: '' });
    const [tipos, setTipos] = useState({ tipos: 'Generos' })
    const [ordenados, setOrdenados] = useState({ valoralf: 'alfabetico' })

    const generos = useSelector(store => store.reduceGeneros)

    const handleInput = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    const handleSelectUnoDos = (e) => {
        setTipos({
            ...tipos,
            [e.target.name]: e.target.value
        })
    }

    const onChangeValueAlfabeticos = (e) => {
        setOrdenados({
            ...ordenados,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        dispatch(listarGeneros())
    }, [dispatch])


    return (
        <>
            <div className={head.contenedor}>
                <div className={head.inicio}>
                    <h1 className={head.titulo__inicio}>Inicio</h1>
                    <Link to='/'><FontAwesomeIcon className={head.icono} icon={faBullseye} /></Link>
                </div>
                {/* ------------------------------------------------------------------------------------------- */}
                <div className={head.contenedor__datos}>
                    <label
                        htmlFor="nombrePokemon"
                        className={head.label__datos}
                    >
                        Ingresar Nombre De VideoJuego
                    </label>
                    <input
                        type="text"
                        placeholder='Ingrese Nombre...'
                        className={head.input__datos}
                        name='name'
                        value={datos.name}
                        id='nombrePokemon'
                        onChange={handleInput}
                    />
                    <button
                        type='button'
                        className={head.button__datos}
                        onClick={() => {
                            dispatch(listaGeneral(datos))
                            setDatos({ name: '' })
                        }}
                    >
                        Buscar
                    </button>
                </div>
                {/* ------------------------------------------------------------------------------------------- */}

                <div className={head.primer__select}>
                    <label className={head.lable__primerSelect}>Buscar por Creados o Existentes</label>
                    <select
                        name="creados"
                        className={head.select}
                        onChange={handleSelectUnoDos}
                        value={tipos.creados}
                    >
                        <option className={head.option__primerSelect} value="seleccionar">Seleccionar</option>
                        <option className={head.option__primerSelect} value="creados">Creados</option>
                        <option className={head.option__primerSelect} value="existentes">Existentes</option>
                    </select>
                    <button className={head.button__primerSelect}>Buscar</button>
                </div>
                {/* ------------------------------------------------------------------------------------------- */}

                <div className={head.segundo__select}>
                    <label className={head.label__tipos} >Buscar Por Generos</label>
                    <select
                        name="tipos"
                        className={head.datos__tipos}
                        value={tipos.tipos}
                        onChange={handleSelectUnoDos}
                    >
                        <option className={head.option__primerSelect}> Generos</option>
                        {generos.data.map((mapeo, index) => {
                            return <option className={head.option__primerSelect} key={index}>{mapeo.name}</option>
                        })}

                    </select>
                    <button
                        type='button'
                        className={head.buton__segundoSelect}
                        onClick={() => {
                            tipos !== 'Generos' ?
                                dispatch(buscarGeneros(tipos)) :
                                console.log('null')
                        }
                        }
                    >Buscar</button>
                </div>
                {/* //------------------------------------------------------------------------------------------------------------------ */}

                <div className={head.contenedor__ordenar}>
                    <div className={head.contenedor__selectores__orden}>
                        <div className={head.select__ordenar}>
                            <form >
                                <label className={head.label__select__ordenar1}>Ascendente</label>
                                <label>
                                    <input
                                        onClick={() => dispatch(listarAscendente())}
                                        className={head.input__radio1}
                                        type="radio"
                                        name="valorasc"
                                        value='ascendente'
                                    />
                                </label>
                                <label>
                                    <input
                                        onClick={() => dispatch(listarDescendente())}
                                        className={head.input__radio1}
                                        type="radio"
                                        name="valorasc"
                                        value='descendente'
                                    />
                                </label>
                                <label className={head.label__select__ordenar2} >Descendente</label>
                            </form>
                        </div>
                        {/* //------------------------------------------------------------------------------------------------------------------- */}

                        <div className={head.select__alfabetico}>
                            <form>
                                <label className={head.label__select__alfabetico1} >Alfabetico</label>
                                <label>
                                    <input
                                        onClick={() => dispatch(listarAlfabetico())}
                                        className={head.input__radio1}
                                        type="radio"
                                        name="valoralf"
                                        value='alfabetico'
                                    />
                                </label>
                                <label>
                                    <input
                                        onClick={() => dispatch(listarRating())}                                        
                                        className={head.input__radio1}
                                        type="radio" name="valoralf"
                                        value='fuerza'
                                    />
                                </label>
                                <label className={head.label__select__alfabetico2} >Rating</label>
                            </form>

                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------- */}

                <div className={head.link__form}>
                    <Link to='/home/crear' className={head.link__crear}>Crear Video Juego</Link>
                </div>
            </div>
        </>
    )
}

export default Header



