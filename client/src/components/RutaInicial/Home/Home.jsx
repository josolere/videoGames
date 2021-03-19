import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardsGeneral from '../../Cards/CardsGeneral/CardsGeneral';
import Header from '../Header/Header';
import home from './Home.module.css';
import { listaGeneral } from '../../../Redux/Actions/actionGeneral';
import queryString from 'query-string';


const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const parsed = queryString.parse(window.location.search)
        dispatch(listaGeneral(parsed))
    }, [dispatch])

    return (
        <>
            <div className={home.contenedor}>
                <div className={home.contenedor__header}>
                    <Header />
                </div>
                <div className={home.contenedor__cardsgeneral}>
                    <CardsGeneral />
                </div>
            </div>
        </>
    )
}

export default Home
