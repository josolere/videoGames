import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardGeneral from './CardGeneral';
import card from './CardGeneral.module.css'
import {limite} from '../../../Redux/Actions/actionPaginado'


const CardsGeneral = () => {
    const dispatch = useDispatch()
    const [videJuego, setVideJuego] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [ascendente, setAscendente] = useState('');
    const [ordenAlfabetico, setOrdenAlfabetico] = useState('');
    const [paginas, setPaginas] = useState([]);

    // ------------------------------------------------------------------------------------------------
    const video = useSelector(store => store.reducerGeneral);
    const tipos = useSelector(store => store.reducerTipos);
    const orden = useSelector(store => store.reducerOrden);
    const creados = useSelector(store => store.reducerCreados);
    const alfabetico = useSelector(store => store.reducerAlfabetico);
    const paginado = useSelector(store => store.reducerPaginado);

    //-------------------------------------------------------------------------------------------------
    useEffect(() => {
        if (typeof video.data === 'string') {
            setMensaje(video.data)
            setVideJuego([])
        } else {
            setVideJuego(video.data)
        }
    }, [video])
    //------------------------------------------------------------------

    useEffect(() => {        
            setPaginas(videJuego.slice(paginado.inicio, paginado.fin))              
    }, [videJuego, paginado])

//-------------------------------------------------------------------------------------------

//envia la cantidad de elementos en el arrayi de videojuegos al actionpaginado
    useEffect(() => {
                dispatch(limite(videJuego.length))       
    }, [videJuego])

    //-----------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        if (tipos.length !== 0) {
            setVideJuego(tipos.data)
        }
    }, [tipos])

    //-------------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        if (typeof creados.data === 'string') {
            setMensaje(creados.data)
            setVideJuego([])
        } else {
            setVideJuego(creados.data)
        }
    }, [creados])

    //-----------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        setAscendente(orden)
    }, [orden])

    //------------------------------------------------------------------------------------------------------------------------


    useEffect(() => {
        setOrdenAlfabetico(alfabetico)
    }, [alfabetico])

    //--------------------------------------------------------------------------------------------------------------------------

    return (
        <>
            {
                paginas.length === 0 && typeof video.data === 'string' || paginas.length === 0 && typeof creados.data === 'string'
                    ?
                    <CardGeneral datos={mensaje} />
                    :
                    paginas.length === 0
                        ?
                        <div className={card.cargando}><h1>Cargando...</h1></div>
                        :
                        ordenAlfabetico.data === 'alfabetico'
                            ?
                            ascendente.data === 'desc'
                                ?
                                paginas.sort((a, b) => a.name > b.name ? 1 : -1).reverse().map((mapeo, index) => {
                                    return <CardGeneral datos={mapeo} key={index} />
                                })
                                : paginas.sort((a, b) => a.name > b.name ? 1 : -1).map((mapeo, index) => {
                                    return <CardGeneral datos={mapeo} key={index} />
                                })
                            : ascendente.data === 'desc' ? paginas.sort((a, b) => a.rating > b.rating ? 1 : -1).reverse().map((mapeo, index) => {
                                return <CardGeneral datos={mapeo} key={index} />
                            })
                                : paginas.sort((a, b) => a.rating > b.rating ? 1 : -1).map((mapeo, index) => {
                                    return <CardGeneral datos={mapeo} key={index} />
                                })
            }
        </>
    )
}

export default CardsGeneral
