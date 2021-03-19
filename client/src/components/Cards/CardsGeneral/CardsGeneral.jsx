import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardGeneral from './CardGeneral';




const CardsGeneral = () => {
    const [videJuego, setVideJuego] = useState([])
    const [mensaje, setMensaje] = useState('')
    const [ascendente, setAscendente] = useState('')
    const [ordenAlfabetico, setOrdenAlfabetico] = useState('')
    // ------------------------------------------------------------------------------------------------
    const video = useSelector(store => store.reducerGeneral);
    const tipos = useSelector(store => store.reducerTipos);
    const orden = useSelector(store => store.reducerOrden);
    const alfabetico = useSelector(store => store.reducerAlfabetico);
    //-------------------------------------------------------------------------------------------------
    useEffect(() => {
        if (typeof video.data === 'string') {
            setMensaje(video.data)
            setVideJuego([])
        } else {
            setVideJuego(video.data)
        }
    }, [video])

    //-----------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        if (tipos.length !== 0) {
            setVideJuego(tipos.data)
        }
    }, [tipos])

    //-----------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        setAscendente(orden)
    }, [orden])

    //------------------------------------------------------------------------------------------------------------------------


    useEffect(() => {
        setOrdenAlfabetico(alfabetico)
    }, [alfabetico])

    return (
        <>
            {videJuego.length === 0 && typeof video.data === 'string'
                ? <CardGeneral datos={mensaje} />
                : ordenAlfabetico.data === 'alfabetico'
                    ? ascendente.data === 'desc' ? videJuego.sort((a, b) => a.name > b.name ? 1 : -1).reverse().map((mapeo, index) => {
                        return <CardGeneral datos={mapeo} key={index} />
                    })
                        : videJuego.sort((a, b) => a.name > b.name ? 1 : -1).map((mapeo, index) => {
                            return <CardGeneral datos={mapeo} key={index} />
                        })
                    : ascendente.data === 'desc' ? videJuego.sort((a, b) => a.rating > b.rating ? 1 : -1).reverse().map((mapeo, index) => {
                        return <CardGeneral datos={mapeo} key={index} />
                    })
                        : videJuego.sort((a, b) => a.rating > b.rating ? 1 : -1).map((mapeo, index) => {
                            return <CardGeneral datos={mapeo} key={index} />
                        })
            }
        </>
    )
}

export default CardsGeneral
